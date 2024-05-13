import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./games.component').then((m) => m.GamesComponent),
    children: [
      {
        path: 'hangman',
        title: 'El Ahorcado',
        loadComponent: () =>
          import('./hangman/hangman.component').then((m) => m.HangmanComponent),
      },
      {
        path: 'higher-or-lower',
        title: 'Mayor o Menor',
        loadComponent: () =>
          import('./higher-or-lower/higher-or-lower.component').then(
            (m) => m.HigherOrLowerComponent
          ),
      },
    ],
  },
];
