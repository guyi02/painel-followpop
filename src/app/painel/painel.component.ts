import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';
Subscription

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  user: string
  isAuth = false
  inscricao: Subscription
  carteira: number


  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    //como vamos sair a todo momento, devemos nos desinscrever desse subscribe, com o onDestroy
    this.inscricao = this.authService.mudaAutorizacao.subscribe(authStatus => {
      this.isAuth = authStatus
    })
    this.verificaUser()
  }

  verificaUser() {
    this.authService.verificaUserLogado().subscribe(
      data => {
        const dados = this.db.collection("users").doc(data.uid).valueChanges().subscribe(res => {
          this.user = res['nome']
          this.carteira = res['carteira']
        })

      }
    )

  }

  logout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
