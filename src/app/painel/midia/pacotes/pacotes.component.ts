import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pacotes',
  templateUrl: './pacotes.component.html',
  styleUrls: ['./pacotes.component.css']
})
export class PacotesComponent implements OnInit {
  carteira: number
  nome: string
  celular: number

  constructor(private fireService: AuthService,
    private db: AngularFirestore,
    private router: Router,
    private toast: ToastrService) { }

  ngOnInit() {

    this.verificaSaldo()

  }

  verificaSaldo() {
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("users").doc(user.uid).valueChanges().subscribe(res => {
        this.carteira = res['carteira'];
        this.nome = res['nome'];
        this.celular = res['celular'];

      })
    })
  }

  enviarPacote(instauser, qtd, service, vlr) {
    this.fireService.verificaUserLogado().subscribe(user => {
      this.db.collection("pedidos").add({
        data: new Date(),
        link: instauser,
        quantidade: 1,
        servico: `${service} / ${qtd} posts`,
        status: 'pendente',
        tipo: 'pacote',
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
