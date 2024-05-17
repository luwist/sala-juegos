import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { GameOverComponent } from './game-over/game-over.component';

@Component({
  selector: 'app-trivia-quiz',
  standalone: true,
  imports: [MainMenuComponent, GameplayComponent, GameOverComponent],
  templateUrl: './trivia-quiz.component.html',
  styleUrl: './trivia-quiz.component.scss',
})
export class TriviaQuizComponent {
  showGameplay: boolean = false;
  showGameOver: boolean = false;

  play(e: boolean) {
    this.showGameplay = e;
  }

  gameOver(e: boolean) {
    this.showGameOver = e;
  }
}
