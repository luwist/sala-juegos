import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '@app/services/user/user.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);

  if (user.user.email !== '') {
    return true;
  }

  router.navigateByUrl('/login');

  return false;
};
