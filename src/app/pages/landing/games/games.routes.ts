import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./games.component').then((m) => m.GamesComponent),
    children: [
      {
        path: 'hangman',
        loadComponent: () =>
          import('./hangman/hangman.component').then((m) => m.HangmanComponent),
      },
    ],
  },
];
