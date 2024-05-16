import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '@app/services/user/user.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  //   const userService = inject(UserService);
  //   const router = inject(Router);

  //   const currentUser = userService.currentUser;

  //   if (
  //     currentUser !== null &&
  //     currentUser !== undefined &&
  //     currentUser.email !== ''
  //   ) {
  //     return true;
  //   }

  //   router.navigateByUrl('/login');

  //   return false;
  return true;
};
