import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-insta-curtidas',
  templateUrl: './insta-curtidas.component.html',
  styleUrls: ['./insta-curtidas.component.css']
})
export class InstaCurtidasComponent implements OnInit {

  constructor(private fb: FormBuilder, private db: AngularFirestore, private fireService: AuthService, private router: Router) { }

  instaCurtidasForm: FormGroup
  dolar: number = 3.80
  carteira: number


  ngOnInit() {
    this.instaCurtidasForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      quantidade: this.fb.control('', [Validators.required, Validators.minLength(100), Validators.pattern('^[1-9]+[0-9]*00$')]),
      tipo: this.fb.control('br', Validators.required),
      servico: this.fb.control('Curtidas Instagram', Validators.required),
    })
    this.verificaSaldo()
  }

  totalValor() {
    const qtd = this.instaCurtidasForm.controls.quantidade.value
    const total = ((this.dolar / 1000) + 0.004) * qtd
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
