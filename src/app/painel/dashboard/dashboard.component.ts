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
        })

      }
    )

  }
  

}
