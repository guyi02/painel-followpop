import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
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
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }
  createForm() {
    this.formRegistro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validator: RegistrarComponent.comparaSenha
      })
  }

  static comparaSenha(form: AbstractControl) {
    let senha = form.get('password').value;
    let senha2 = form.get('password2').value;
    if (senha != senha2) {
      form.get('password2').setErrors({ MatchPassword: true })
    } else {
      return null
    }
  }

  ngOnInit() {
    this.createForm()
  }

  registrar() {
    this.authService.registrarUsuario(this.formRegistro.value)
  }


}
