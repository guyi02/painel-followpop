import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

interface User {
  name: string,
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUser: User
  meuFormulario: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  createForm() {
    this.meuFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    this.createForm()
  }

  logar() {
    this.authService.logarUsuario(this.meuFormulario.value)
  }

}
