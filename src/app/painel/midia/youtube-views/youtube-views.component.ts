import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-youtube-views',
  templateUrl: './youtube-views.component.html',
  styleUrls: ['./youtube-views.component.css']
})
export class YoutubeViewsComponent implements OnInit {

  constructor(private fb: FormBuilder, private db: AngularFirestore, private fireService: AuthService, private router: Router, private toast: ToastrService) { }

  YoutubeViewsForm: FormGroup
  dolar: number = 4
  vlrPorMil: number = 1.50
  lucro: number = 2.75
  carteira: number
  nome: string
  celular: string

  ngOnInit() {
    this.YoutubeViewsForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      quantidade: this.fb.control('', [Validators.required, Validators.minLength(1000), Validators.pattern('^[1-9]+[0-9]*00$')]),
      tipo: this.fb.control('yt-vw', Validators.required),
      servico: this.fb.control('Youtube Views', Validators.required),
    })
    this.verificaSaldo()
  }


  totalValor() {
    const qtd = this.YoutubeViewsForm.controls.quantidade.value
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


  enviarViews(form) {
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
      })
    })


  }

}
