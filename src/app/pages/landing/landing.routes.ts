import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing.component').then((m) => m.LandingComponent),
    children: [
      {
        path: '',
        title: 'Inicio',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'who-i-am',
        title: 'Quien Soy',
        loadComponent: () =>
          import('./who-i-am/who-i-am.component').then(
            (m) => m.WhoIAmComponent
          ),
      },
      {
        path: 'chat',
        title: 'Sala de Chat',
        loadComponent: () =>
          import('./chat/chat.component').then((m) => m.ChatComponent),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('./games/games.routes').then((m) => m.routes),
      },
    ],
  },
];
