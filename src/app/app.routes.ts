import { Routes } from '@angular/router';
import { isLoggedGuard } from './guards';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.routes').then((r) => r.routes),
    canActivate: [isLoggedGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
];
