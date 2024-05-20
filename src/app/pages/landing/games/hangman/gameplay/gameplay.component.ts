import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Scene } from '../scene.enum';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss',
})
export class GameplayComponent {
  @ViewChild('hud') private _hudElement!: ElementRef;
  @ViewChild('keyboardRef') private _keyboardElement!: ElementRef;
  @ViewChild('gameover') private _gameoverElement!: ElementRef;

  @Output() backMainMenu = new EventEmitter<string>();

  word: string = 'arbol';
  usedLetters: string[] = [];
  score: number = 0;
  attempt: number = 0;

  keyboard: string[][] = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  onBackMainMenu(): void {
    this.backMainMenu.emit(Scene.MainMenu);
  }

  onSelectedKey(e: Event): void {
    const buttonElement = e.target as HTMLButtonElement;
    const key = buttonElement.dataset['key'] as string;

    if (this.word.indexOf(key) !== -1) {
      this.usedLetters.push(key);

      buttonElement.classList.add('right');
    } else {
      this.attempt++;

      buttonElement.classList.add('wrong');
    }

    this.checkWin();
  }

  checkWin(): void {
    const keyboardElement = this._keyboardElement
      .nativeElement as HTMLDivElement;
    const hudElement = this._hudElement.nativeElement as HTMLDivElement;
    const gameoverElement = this._gameoverElement
      .nativeElement as HTMLDivElement;

    if (this.attempt >= 7) {
      hudElement.classList.add('hide');

      gameoverElement.classList.remove('hide');
      gameoverElement.classList.add('lose');

      keyboardElement.classList.add('hide');

      this.showWord();
    }
  }

  showWord(): void {
    const word = this.word.split('');

    word.forEach((letter) => {
      this.usedLetters.push(letter);
    });
  }
}
