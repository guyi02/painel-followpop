import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insta-curtidas-global',
  templateUrl: './insta-curtidas-global.component.html',
  styleUrls: ['./insta-curtidas-global.component.css']
})

export class InstaCurtidasGlobalComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private db: AngularFirestore,
    private fireService: AuthService,
    private router: Router,
    private toast: ToastrService) { }

  instaCurtidasGlForm: FormGroup
  dolar: number = 4
  vlrPorMil: number = 0.1
  lucro: number = 4
  carteira: number
  nome: string
  celular: string
  instaReg = /^(.*instagram.com\/p\/)(.*)[\/]/


  ngOnInit() {
    this.instaCurtidasGlForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20), Validators.pattern(this.instaReg)]),
      quantidade: this.fb.control('', [Validators.required, Validators.minLength(100), Validators.pattern('^[1-9]+[0-9]*00$')]),
      tipo: this.fb.control('ig-lk-br', Validators.required),
      servico: this.fb.control('Curtidas Instagram br', Validators.required),
    })
    this.verificaSaldo()
  }

  totalValor() {
    const qtd = this.instaCurtidasGlForm.controls.quantidade.value
    const total = ((this.vlrPorMil / 1000) * qtd) * this.dolar * this.lucro
    return Math.round(total)
  }

  verificaSaldo() {
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("users").doc(user.uid).valueChanges().subscribe(res => {
        this.carteira = res['carteira'];
        this.nome = res['nome']
        this.celular = res['celular']
      })
    })
  }

  temGrana() {
    return this.carteira > this.totalValor()
  }

  enviarCurtida(form) {
    const vlr = parseInt(document.getElementById('vlrTotal').innerHTML)
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("pedidos").add({
        data: new Date(),
        link: form.link,
        quantidade: form.quantidade,
        servico: form.servico,
        status: 'pendente',
        tipo: form.tipo,
        valor: vlr,
        id: user.uid,
        nome: this.nome,
        celular: this.celular
      }).then(() => {
        const subtracao = this.carteira - vlr
        this.db.collection("users").doc(user.uid).set({
          carteira: subtracao
        }, { merge: true })
        this.router.navigate(['/painel'])
        this.toast.success('Seu pedido foi enviado, logo serão inseridos em seu perfil', 'sucesso')
      }).catch(err => {
        this.toast.error(err, 'Erro')
      })
    })


  }

}
