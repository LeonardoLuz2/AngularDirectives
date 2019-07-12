import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormBase } from 'src/app/abstract/formBase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent extends FormBase implements OnInit {

  constructor(public formGroup: FormGroup, private formBuilder: FormBuilder, private clienteService: ClienteService) { 
    super(formGroup);
  }

  ngOnInit() {
   this.formGroup = this.formBuilder.group({
     nome: ['', [ Validators.required ]],
     descricao: ['', [ Validators.required ]]
   });
  }

  register() {
    if (this.IsValidForm()) {
      return;
    }
  }

}
