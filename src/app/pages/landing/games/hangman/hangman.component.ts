import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { Scene } from './scene.enum';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, MainMenuComponent, GameplayComponent],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss',
})
export class HangmanComponent {
  currentScene: string = Scene.MainMenu;

  onChangeScene(scene: string): void {
    this.currentScene = scene;
  }

  // lives = 7;
  // randomIndexAnswer!: number;
  // category = '';
  // answer = '';
  // score = 0;

  // answerArray: any[] = [];

  // answers = [
  //   {
  //     category: 'Animal',
  //     answer: ['Elefante', 'Leon', 'Tigre', 'Jirafa', 'Hipopotamo'],
  //   },
  //   {
  //     category: 'Pais',
  //     answer: [
  //       'Argentina',
  //       'Francia',
  //       'Japon',
  //       'Australia',
  //       'Brasil',
  //       'Peru',
  //       'Colombia',
  //     ],
  //   },
  //   {
  //     category: 'Fruta',
  //     answer: ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Pera'],
  //   },
  //   {
  //     category: 'Profesion',
  //     answer: ['Doctor', 'Ingeniero', 'Maestro', 'Abogado', 'Cocinero'],
  //   },
  //   {
  //     category: 'Color',
  //     answer: ['Rojo', 'Azul', 'Verde', 'Negro', 'Blanco'],
  //   },
  // ];

  // showPauseSettings: boolean = false;
  // keyboard = [
  //   ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  //   ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
  //   ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  // ];

  // @ViewChild('mainMenu') private _mainMenu!: ElementRef;
  // @ViewChild('gameplay') private _gameplay!: ElementRef;
  // @ViewChild('keyboardd') private _keyboard!: ElementRef;
  // @ViewChild('gameEnd') private _gameEnd!: ElementRef;
  // @ViewChild('menu') private _menu!: ElementRef;

  // ngAfterViewInit(): void {
  //   const gameplay = this._gameplay.nativeElement;

  //   gameplay.style.display = 'none';

  //   this.randomIndex();
  // }

  // randomIndex(): void {
  //   const random = Math.floor(Math.random() * (this.answers.length - 0) + 0);

  //   this.randomIndexAnswer = random;
  // }

  // buttonPlay(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const mainMenu = this._mainMenu.nativeElement;
  //   const gameEnd = this._gameEnd.nativeElement;

  //   const menu = this._menu.nativeElement;
  //   const keyboard = this._keyboard.nativeElement;

  //   menu.style.opacity = '1';
  //   gameEnd.style.display = 'none';
  //   keyboard.style.display = 'flex';

  //   this.category = this.randomCategory();
  //   this.answerArray = this.randomAnswer();
  //   this.resetKeyboardButton();

  //   mainMenu.style.display = 'none';
  //   gameplay.style.display = 'block';

  //   gameEnd.style.display = 'none';
  // }

  // buttonPause(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const mainMenu = this._mainMenu.nativeElement;

  //   mainMenu.style.display = 'none';
  //   gameplay.style.display = 'block';

  //   this.showPauseSettings = true;
  // }

  // buttonHome(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const mainMenu = this._mainMenu.nativeElement;

  //   mainMenu.style.display = 'flex';
  //   gameplay.style.display = 'none';

  //   this.showPauseSettings = false;
  // }

  // buttonRestart(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const mainMenu = this._mainMenu.nativeElement;

  //   mainMenu.style.display = 'none';
  //   gameplay.style.display = 'block';

  //   this.showPauseSettings = false;

  //   this.randomIndex();
  //   this.category = this.randomCategory();
  //   this.answerArray = this.randomAnswer();
  //   this.resetKeyboardButton();

  //   const menu = this._menu.nativeElement;
  //   const keyboard = this._keyboard.nativeElement;
  //   const gameEnd = this._gameEnd.nativeElement;

  //   menu.style.opacity = '1';
  //   gameEnd.style.display = 'none';
  //   keyboard.style.display = 'flex';

  //   this.lives = 7;
  // }

  // keyboardButton(e: any): void {
  //   const letter: string = e.target.dataset.letter;

  //   if (letter !== undefined) {
  //     const buttonElement = e.target as HTMLButtonElement;
  //     const imageElement = buttonElement.children[0] as HTMLImageElement;

  //     if (this.discoveredLetter(letter)) {
  //       imageElement.src = 'assets/games/hangman/gameplay_letter_right.png';

  //       this.score += 10;
  //     } else {
  //       imageElement.src = 'assets/games/hangman/gameplay_letter_wrong.png';

  //       if (this.score > 0) {
  //         this.score -= 10;
  //       }

  //       this.lives--;
  //     }

  //     if (this.checkWin()) {
  //       const gameEnd = this._gameEnd.nativeElement as HTMLDivElement;
  //       const gameEndBackground = gameEnd.children[0] as HTMLImageElement;

  //       gameEndBackground.src = 'assets/games/hangman/welldone_background.png';
  //     }

  //     if (this.lives <= 0) {
  //       this.showEndgameBackground();
  //       this.showAnswer();

  //       this.lives = 7;
  //     }
  //   }
  // }

  // showEndgameBackground(): void {
  //   const menu = this._menu.nativeElement;
  //   const keyboard = this._keyboard.nativeElement;
  //   const gameEnd = this._gameEnd.nativeElement;

  //   menu.style.opacity = '0';
  //   gameEnd.style.display = 'block';
  //   keyboard.style.display = 'none';
  // }

  // showAnswer(): void {
  //   for (let i = 0; i < this.answerArray.length; i++) {
  //     this.answerArray[i].show = true;
  //   }
  // }

  // discoveredLetter(letter: string): boolean {
  //   let discoveredLetter = false;

  //   for (let i = 0; i < this.answerArray.length; i++) {
  //     const letterKey: string = this.answerArray[i].letter;

  //     if (letterKey.toLowerCase() == letter.toLowerCase()) {
  //       this.answerArray[i].show = true;

  //       discoveredLetter = true;
  //     }
  //   }

  //   return discoveredLetter;
  // }

  // endGame(): boolean {
  //   return false;
  // }

  // isWin(): boolean {
  //   return false;
  // }

  // checkWin(): boolean {
  //   let win = false;
  //   let countLetter = 0;

  //   for (let i = 0; i < this.answerArray.length; i++) {
  //     const l: string = this.answerArray[i].show;

  //     if (l) {
  //       countLetter++;
  //     }
  //   }

  //   if (this.answerArray.length == countLetter) {
  //     win = true;
  //   }

  //   return win;
  // }

  // resetKeyboardButton(): void {
  //   const keyboard = this._keyboard.nativeElement;

  //   for (let i = 0; i < 3; i++) {
  //     const row = keyboard.children[i];

  //     for (let j = 0; j < row.children.length; j++) {
  //       const letter = row.children[j].children[0];

  //       letter.src = '';
  //     }
  //   }
  // }

  // randomCategory(): string {
  //   return this.answers[this.randomIndexAnswer].category;
  // }

  // randomAnswer(): any[] {
  //   const random = Math.floor(Math.random() * (this.answers.length - 0) + 0);
  //   const ans = this.answers[this.randomIndexAnswer].answer[random];
  //   const newArray: any[] = [];

  //   for (let i = 0; i < ans.length; i++) {
  //     newArray.push({
  //       letter: ans[i],
  //       show: false,
  //     });
  //   }

  //   return newArray;
  // }
}
