import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string
  carteira: number
  pedidos: any[] = []

  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    this.verificaUser()
  }

  verificaUser() {
    this.authService.verificaUserLogado().subscribe(
      data => {
        const dados = this.db.collection("users").doc(data.uid).valueChanges().subscribe(res => {
          this.user = res['nome']
          this.carteira = res['carteira']
          this.meusPedidos(data.uid)
        })
      }
    )

  }

  meusPedidos(id) {
    const list = this.db.collection('pedidos', ref => ref.where('id', '==', id))
    list.valueChanges().subscribe(data => {
      this.pedidos = data
    })
  }

  dataCorreta(data) {
    const dat = new Date(data * 1000)
    const a = dat.getDate()
    const b = dat.getMonth() + 1
    const c = dat.getFullYear()
    const novaData = `${a}/${b}/${c}`
    return novaData
  }


}
