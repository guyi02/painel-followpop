import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insta-comentarios',
  templateUrl: './insta-comentarios.component.html',
  styleUrls: ['./insta-comentarios.component.css']
})
export class InstaComentariosComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private db: AngularFirestore,
    private fireService: AuthService,
    private router: Router,
    private toast: ToastrService) { }

  instaComentariosForm: FormGroup
  dolar: number = 4
  vlrPorMil: number = 0.80
  lucro: number = 3
  carteira: number
  nome: string
  celular: string


  ngOnInit() {

    this.instaComentariosForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      quantidade: this.fb.control('', [Validators.minLength(20)]),
      area: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      tipo: this.fb.control('ig-cm-br', Validators.required),
      servico: this.fb.control('Comentarios Instagram Br', Validators.required),
    })
    this.verificaSaldo()
  }

  totalValor() {
    const qtd = this.countArea()
    const total = (this.vlrPorMil/ 20) * this.lucro * this.dolar * qtd
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

  enviarComentarios(form) {
    const vlr = parseInt(document.getElementById('vlrTotal').innerHTML)
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("pedidos").add({
        data: new Date(),
        link: form.link,
        quantidade: this.countArea(),
        comentarios: form.area,
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
      })
    })
  }


  countArea() {
    const lines = this.instaComentariosForm.get('area').value.split('\n')
    return lines.length
  }
}