import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

interface User {
  nome: string,
  sobrenome: string,
  celular: number,
  email: string,
  password: string,
  password2: string,
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  dataUser: User
  formRegistro: FormGroup
  buttonDisable = false

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }
  createForm() {
    this.formRegistro = this.fb.group({
      nome: ['', [Validators.required, Validators.email]],
      sobrenome: ['', [Validators.required]],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    this.createForm()
  }

  registrar() {
    this.authService.registrarUsuario(this.formRegistro.value)
  }


}
