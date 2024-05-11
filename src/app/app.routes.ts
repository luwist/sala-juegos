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
    title: 'Iniciar Sesion',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    title: 'Crear Cuenta',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];
