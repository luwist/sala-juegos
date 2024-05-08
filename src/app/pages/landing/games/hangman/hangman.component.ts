import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MainMenuController } from './controllers/main-menu.controller';
import { GameplayController } from './controllers/gameplay.controller';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss',
})
export class HangmanComponent implements AfterViewInit {
  @ViewChild('game', { static: false }) canvas!: ElementRef;

  ctx!: CanvasRenderingContext2D;
  buttonPlayBG = new Image();

  constructor(
    private _mainMenuController: MainMenuController,
    private _gameplayController: GameplayController
  ) {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.buttonPlayBG.src = './assets/games/hangman/main_menu_play.png';

    this.ctx.drawImage(this.buttonPlayBG, 0, 0, 50, 50, 0, 0, 50, 50);
  }

  // answer = '';

  // keys = [
  //   'Q',
  //   'W',
  //   'E',
  //   'R',
  //   'T',
  //   'Y',
  //   'U',
  //   'I',
  //   'O',
  //   'P',
  //   'A',
  //   'S',
  //   'D',
  //   'F',
  //   'G',
  //   'H',
  //   'J',
  //   'K',
  //   'L',
  //   'Ñ',
  //   'Z',
  //   'X',
  //   'C',
  //   'V',
  //   'B',
  //   'N',
  //   'M',
  // ];

  // @ViewChild('gallow') gallowElement!: ElementRef;
  // @ViewChild('game') gameElement!: ElementRef;

  // lives: number = 0;
  // text: any = [];
  // live: number = 7;

  // answers = [
  //   'avion',
  //   'camion',
  //   'hospital',
  //   'radar',
  //   'gato',
  //   'taxi',
  //   'elefante',
  //   'policia',
  //   'escuela',
  //   'medico',
  //   'arbol',
  //   'manzana',
  // ];

  // ngOnInit(): void {
  //   const random = Math.random() * (this.answers.length - 0) + 0;
  //   const index = Math.floor(random);

  //   this.answer = this.answers[index];
  //   this.textInit();
  // }

  // textInit(): void {
  //   for (let i = 0; i < this.answer.length; i++) {
  //     this.text.push({
  //       letter: this.answer[i],
  //       show: false,
  //     });
  //   }
  // }

  // keyPressed(e: any): void {
  //   if (e.target.nodeName === 'BUTTON') {
  //     const target = e.target;
  //     const letter = target.outerText.toLowerCase();

  //     if (this.answer.toLowerCase().includes(letter)) {
  //       target.childNodes[1].classList.add('right');

  //       for (let i = 0; i < this.text.length; i++) {
  //         if (this.text[i].letter.toLowerCase() === letter) {
  //           this.text[i] = {
  //             letter: letter.toUpperCase(),
  //             show: true,
  //           };
  //         }
  //       }
  //     } else {
  //       target.childNodes[1].classList.add('wrong');

  //       const element = this.gallowElement.nativeElement;
  //       const gallow = element.childNodes[this.lives];

  //       gallow.classList.add('show');

  //       this.lives++;
  //       this.live--;
  //     }

  //     if (this.isWinner()) {
  //       const element = this.gameElement.nativeElement;
  //       element.classList.add('show');
  //       element.childNodes[0].classList.add('welldone');
  //       element.childNodes[0].childNodes[0].innerText = '¡Ganaste!';
  //     }

  //     if (this.isLoser()) {
  //       const element = this.gameElement.nativeElement;
  //       element.classList.add('show');
  //       element.childNodes[0].classList.add('gameover');
  //       element.childNodes[0].childNodes[0].innerText = 'Perdiste :c';
  //     }
  //   }
  // }

  // isWinner() {
  //   let winner = false;
  //   let count = 0;

  //   for (let i = 0; i < this.text.length; i++) {
  //     if (this.text[i].show == true) {
  //       count++;
  //     }
  //   }

  //   if (this.answer.length == count) {
  //     winner = true;
  //   }

  //   return winner;
  // }

  // isLoser() {
  //   let loser = false;

  //   if (this.live == 0) {
  //     loser = true;
  //   }

  //   return loser;
  // }
}
