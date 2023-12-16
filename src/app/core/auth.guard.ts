import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@data/services/auth.service';
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('authToken');
  // const authService = inject(AuthService);
  const router = inject(Router);
  if(token){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return authService.isLoggedIn;
  // if(authService.isLoggedIn){
  //   return true;
  // } else {
  //   router.navigate(['/login']);
  //   return false;
  // }
};
