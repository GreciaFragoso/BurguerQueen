import { CanActivateFn } from '@angular/router';
import { AuthService } from '@data/services/auth.service';
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = (route, state) => {
  // if(localStorage){}
  const authService = inject(AuthService);
  // if(authService.isLoggedIn){
  return authService.isLoggedIn;
  // }

  // return false;
};
