import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgotForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }
  createForm() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    })
  }

  ngOnInit() {
    this.createForm()
  }

  forgotPassword() {
    const email = this.forgotForm.controls.email.value
    this.auth.recuperaSenha(email)

  }
}
