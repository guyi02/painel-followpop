import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

interface authUser {
  email: string,
  nome: string,
  sobrenome: string,
  celular: string,
  password: string
  check: boolean
}
interface User {
  email: string,
  userId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //autenticado começa falso
  private autenticado = false
  mudaAutorizacao = new Subject<boolean>();

  constructor(private angularFire: AngularFireAuth, private bd: AngularFirestore, private router: Router) { }

  //listener para verficar se esta logado ou nao
  initAuthListener() {
    this.angularFire.authState.subscribe(user => {
      if (user) {
        this.autenticado = true
        this.mudaAutorizacao.next(true)
        this.router.navigate(['/painel']);
      } else {
        this.mudaAutorizacao.next(false)
        this.router.navigate(['/login'])
        this.autenticado = false
      }
    })
  }

  registrarUsuario(authData: authUser) {
    const userProfile = {
      nome: authData.nome,
      sobrenome: authData.sobrenome,
      email: authData.email,
      celular: authData.celular,
      carteira: 0.00
    }
    this.angularFire.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.criaDadosAoBanco(result.user.uid, userProfile)

      })
      .catch(err => { console.log(err) })
  }

  logarUsuario(authData: authUser) {
    this.angularFire.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
      })
      .catch(err => { console.log(err) })
  }

  logout() {
    this.angularFire.auth.signOut()
  }

  isAuth() {
    return this.autenticado
  }

  verificaUserLogado(): any {
    const user = this.angularFire.authState
    return user
  }

  criaDadosAoBanco(id: string, data) {
    this.bd.collection("users").doc(id).set(data, { merge: true })
      .then()
      .catch(error => console.log(error)
      )
  }

}
