import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiServiceService } from '@data/services/api-service.service'; 
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // email: string = '';
  // password: string = '';
  loginForm: FormGroup;

  constructor( // se inyectan servicios
    public authService: AuthService,
    private formBuilder: FormBuilder, 
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(){
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(
        () => { 
          this.router.navigate(['home/order']);
        },
        (error) => {
          console.log('Error:', error);
          alert(error.error)
        }
      )
    }
  }
}
