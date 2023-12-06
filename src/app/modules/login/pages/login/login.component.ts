import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  checkoutForm;

  constructor( // se inyectan servicios
    private formBuilder: FormBuilder, 
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password:'',
    })
  }

  Login(){
    console.log(this.email);
    console.log(this.password);
    // this.router.navigate(['home/order'])
  }

  ngOnInit(){
  }
}
