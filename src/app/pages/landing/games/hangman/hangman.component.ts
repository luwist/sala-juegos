import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss',
})
export class HangmanComponent implements AfterViewInit {
  lives = 7;
  randomIndexAnswer!: number;
  category = '';
  answer = '';

  answers = [
    {
      category: 'Animal',
      answer: ['Elefante', 'Leon', 'Tigre', 'Jirafa', 'Hipopotamo'],
    },
    {
      category: 'Pais',
      answer: ['Estados Unidos', 'Francia', 'Japon', 'Australia', 'Brasil'],
    },
    {
      category: 'Fruta',
      answer: ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Pera'],
    },
    {
      category: 'Profesion',
      answer: ['Doctor', 'Ingeniero', 'Maestro', 'Abogado', 'Cocinero'],
    },
    {
      category: 'Color',
      answer: ['Rojo', 'Azul', 'Verde', 'Negro', 'Blanco'],
    },
  ];

  showPauseSettings: boolean = false;
  keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  @ViewChild('mainMenu') private _mainMenu!: ElementRef;
  @ViewChild('gameplay') private _gameplay!: ElementRef;
  @ViewChild('keyboardd') private _keyboard!: ElementRef;
  @ViewChild('gameEnd') private _gameEnd!: ElementRef;
  @ViewChild('menu') private _menu!: ElementRef;

  ngAfterViewInit(): void {
    const gameplay = this._gameplay.nativeElement;

    gameplay.style.display = 'none';

    this.randomIndex();
  }

  randomIndex(): void {
    const random = Math.floor(Math.random() * (this.answers.length - 0) + 0);

    this.randomIndexAnswer = random;
  }

  buttonPlay(): void {
    const gameplay = this._gameplay.nativeElement;
    const mainMenu = this._mainMenu.nativeElement;
    const gameEnd = this._gameEnd.nativeElement;

    this.category = this.randomCategory();
    this.answer = this.randomAnswer();
    this.resetKeyboardButton();

    mainMenu.style.display = 'none';
    gameplay.style.display = 'block';

    gameEnd.style.display = 'none';
  }

  buttonPause(): void {
    const gameplay = this._gameplay.nativeElement;
    const mainMenu = this._mainMenu.nativeElement;

    mainMenu.style.display = 'none';
    gameplay.style.display = 'block';

    this.showPauseSettings = true;
  }

  buttonHome(): void {
    const gameplay = this._gameplay.nativeElement;
    const mainMenu = this._mainMenu.nativeElement;

    mainMenu.style.display = 'flex';
    gameplay.style.display = 'none';

    this.showPauseSettings = false;
  }

  buttonRestart(): void {
    const gameplay = this._gameplay.nativeElement;
    const mainMenu = this._mainMenu.nativeElement;

    mainMenu.style.display = 'none';
    gameplay.style.display = 'block';

    this.showPauseSettings = false;

    this.randomIndex();
    this.category = this.randomCategory();
    this.answer = this.randomAnswer();
    this.resetKeyboardButton();

    const menu = this._menu.nativeElement;
    const keyboard = this._keyboard.nativeElement;
    const gameEnd = this._gameEnd.nativeElement;

    menu.style.opacity = '1';
    gameEnd.style.display = 'none';
    keyboard.style.display = 'flex';

    this.lives = 7;
  }

  isWin(): void {}

  checkWin(): void {}

  keyboardButton(e: any): void {
    const letter = e.target.dataset.letter;

    if (letter !== undefined) {
      const buttonKey = e.target;

      buttonKey.children[0].src =
        'assets/games/hangman/gameplay_letter_wrong.png';

      this.lives--;

      if (this.lives <= 0) {
        const menu = this._menu.nativeElement;
        const keyboard = this._keyboard.nativeElement;
        const gameEnd = this._gameEnd.nativeElement;

        menu.style.opacity = '0';
        gameEnd.style.display = 'block';
        keyboard.style.display = 'none';

        this.lives = 7;
      }
    }
  }

  isLetterWrong(): void {}

  resetKeyboardButton(): void {
    const keyboard = this._keyboard.nativeElement;

    for (let i = 0; i < 3; i++) {
      const row = keyboard.children[i];

      for (let j = 0; j < row.children.length; j++) {
        console.log(row.children);
        const letter = row.children[j].children[0];
        console.log(letter);

        letter.src = '';
      }
    }
    console.log(this._keyboard);

    // for (let i = 0; i < 28;i++) {
    // }
    // const letter = e.target.dataset.letter;

    // if (letter !== undefined) {
    //   const buttonKey = e.target;

    //   buttonKey.children[0].src =
    //     'assets/games/hangman/gameplay_letter_wrong.png';

    //   console.log(letter);
    //   console.log(e);
    // }
  }

  randomCategory(): string {
    return this.answers[this.randomIndexAnswer].category;
  }

  randomAnswer(): string {
    const random = Math.floor(Math.random() * (this.answers.length - 0) + 0);

    return this.answers[this.randomIndexAnswer].answer[random];
  }
}
