import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-insta-curtidas',
  templateUrl: './insta-curtidas.component.html',
  styleUrls: ['./insta-curtidas.component.css']
})
export class InstaCurtidasComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  instaCurtidasForm: FormGroup
  dolar: number = 3.80

  ngOnInit() {
    this.instaCurtidasForm = this.fb.group({
      link: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      quantidade: this.fb.control('', [Validators.required, Validators.minLength(100)]),
      total: this.fb.control({ value: '', disabled: true }, [Validators.required])
    })
  }

  totalValor(qtd: number): number {
    const total = ((this.dolar / 1000) + 0.04 ) * qtd
    return  Math.round(total)
  }

}
