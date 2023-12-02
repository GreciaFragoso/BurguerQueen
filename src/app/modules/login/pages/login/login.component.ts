import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password:'',
    })
  }

  ngOnInit(){
  }
}
