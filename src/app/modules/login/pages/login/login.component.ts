<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 6324c99 (Fixed broken HEAD)
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
<<<<<<< HEAD
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
=======
  email: string = '';
  password: string = '';
  checkoutForm;

  constructor( // se inyectan servicios
    private formBuilder: FormBuilder, 
>>>>>>> 6324c99 (Fixed broken HEAD)
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password:'',
    })
  }

  Login(){
<<<<<<< HEAD
    this.router.navigate(['home/order']);
=======
    console.log(this.email);
    console.log(this.password);
    // this.router.navigate(['home/order'])
>>>>>>> 6324c99 (Fixed broken HEAD)
  }

  ngOnInit(){
  }
}
