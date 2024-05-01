import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing.component').then((m) => m.LandingComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'quien-soy',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.component').then((m) => m.ChatComponent),
      },
      {
        path: 'games/hangman',
        loadComponent: () =>
          import('./games/hangman/hangman.component').then(
            (m) => m.HangmanComponent
          ),
      },
      {
        path: 'games/higher-or-lower',
        loadComponent: () =>
          import('./games/higher-or-lower/higher-or-lower.component').then(
            (m) => m.HigherOrLowerComponent
          ),
      },
    ],
  },
];
