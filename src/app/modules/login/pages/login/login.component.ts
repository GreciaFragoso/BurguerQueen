import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password:'',
    })
  }

  Login(){
    this.router.navigate(['order']);
  }

  ngOnInit(){
  }
}
