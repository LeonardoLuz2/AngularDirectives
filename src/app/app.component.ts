import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'NgDynamicStyles';
  form: FormGroup;

  constructor(private builder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.builder.group({
      teste: ['']
    });
  }

  get teste() { return this.form.get('teste'); }

  receiverSelection(selection: string) {
    if (selection != '')
      this.teste.setValue(selection);

    document.getElementById('teste').focus();
  }

  clickado() {
    console.log('dgdfgdfgd');
  }

}
