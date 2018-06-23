import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  isAuth = false
  inscricao: Subscription



  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    //como vamos sair a todo momento, devemos nos desinscrever desse subscribe, com o onDestroy
    this.inscricao = this.authService.mudaAutorizacao.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  logout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
