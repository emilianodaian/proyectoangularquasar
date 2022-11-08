import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formcontacto',
  templateUrl: './formcontacto.component.html',
  styleUrls: ['./formcontacto.component.css']
})
export class FormcontactoComponent implements OnInit {
  formulariocontacto: FormGroup;


  enviarInfo() {
    console.log("hola");
    console.log(this.formulariocontacto.value);
  }
  constructor(public formulario: FormBuilder) {
    this.formulariocontacto = this.formulario.group(
      {
        nombreyapellido: [''],
        correo: [''],
        comentario: ['']
      }
    )
  }

  ngOnInit(): void {

  }



}
