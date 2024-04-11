import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // invece di creare il constructor usiamo inject per inoltare il router
  const router = inject(Router);

  const token = localStorage.getItem('token');



  if(!token) {
    router.navigate(['auth', 'login'])
    return false  
  }

  return true;
};
