import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/services';
import { map, take } from 'rxjs';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentUser.pipe(
    take(1),
    map((user) => {
      if (!user.isAuth) {
        router.navigateByUrl('/login');

        return false;
      }

      return true;
    })
  );
};
