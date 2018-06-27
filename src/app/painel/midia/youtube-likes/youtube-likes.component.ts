import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youtube-likes',
  templateUrl: './youtube-likes.component.html',
  styleUrls: ['./youtube-likes.component.css']
})
export class YoutubeLikesComponent implements OnInit {

  constructor(private fb: FormBuilder, private db: AngularFirestore, private fireService: AuthService, private router: Router) { }

  YoutubeLikesForm: FormGroup
  dolar: number = 3.80
  carteira: number

  ngOnInit() {
    this.YoutubeLikesForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      quantidade: this.fb.control('', [Validators.required, Validators.minLength(100), Validators.pattern('^[1-9]+[0-9]*00$')]),
      tipo: this.fb.control('br', Validators.required),
      servico: this.fb.control('Youtube Views', Validators.required),
    })
    this.verificaSaldo()
  }

  
  totalValor() {
    const qtd = this.YoutubeLikesForm.controls.quantidade.value
    const total = ((this.dolar / 1000) + 0.011) * qtd
    return Math.round(total)
  }

  verificaSaldo() {
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("users").doc(user.uid).valueChanges().subscribe(res => {
        this.carteira = res['carteira']
      })
    })
  }

  temGrana() {
    return this.carteira > this.totalValor()
  }


  enviarLikes(form) {
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
        id: user.uid
      }).then(() => {
        const subtracao = this.carteira - vlr
        this.db.collection("users").doc(user.uid).set({
          carteira: subtracao
        }, { merge: true })
        this.router.navigate(['/painel'])
      })
    })


  }

}
