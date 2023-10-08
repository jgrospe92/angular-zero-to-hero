import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const imageDetailGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert("Invalid Image")
    router.navigate(['/images']);
    return false;
  }
  return true;
};
