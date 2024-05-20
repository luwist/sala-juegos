import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Scene } from './scene.enum';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { GameOverComponent } from './game-over/game-over.component';

@Component({
  selector: 'app-arithmetic',
  standalone: true,
  imports: [MainMenuComponent, GameplayComponent, GameOverComponent],
  templateUrl: './arithmetic.component.html',
  styleUrl: './arithmetic.component.scss',
})
export class ArithmeticComponent {
  currentScene: string = Scene.MainMenu;

  // @ViewChild('timeBar') private _timeBar!: ElementRef;
  // @ViewChild('containerOptions') private _containerOptions!: ElementRef;
  // @ViewChild('questionDiv') private _questionDiv!: ElementRef;
  // @ViewChild('gameplay') private _gameplay!: ElementRef;
  // @ViewChild('endgame') private _endgame!: ElementRef;

  // question: any;
  // time: any;

  // answer: string = '?';
  // left: number = 0;

  // data = [
  //   {
  //     level: 1,
  //     question: '1 + 1',
  //     answer: 2,
  //     options: [31, 2, 80],
  //   },
  //   {
  //     question: '3 x 4',
  //     answer: 12,
  //     options: [7, 12, 9],
  //   },
  //   {
  //     question: '15 ÷ 3',
  //     answer: 5,
  //     options: [3, 5, 7],
  //   },
  //   {
  //     question: '8 × 2',
  //     answer: 16,
  //     options: [10, 16, 20],
  //   },
  //   {
  //     question: '24 ÷ 4',
  //     answer: 6,
  //     options: [5, 6, 8],
  //   },
  //   {
  //     question: '7 × 6',
  //     answer: 42,
  //     options: [30, 36, 42],
  //   },
  //   {
  //     question: '36 ÷ 6',
  //     answer: 6,
  //     options: [4, 6, 8],
  //   },
  //   {
  //     question: '9 × 9',
  //     answer: 81,
  //     options: [72, 81, 90],
  //   },
  //   {
  //     question: '64 ÷ 8',
  //     answer: 8,
  //     options: [7, 8, 9],
  //   },
  //   {
  //     question: '5 × 7',
  //     answer: 35,
  //     options: [28, 35, 42],
  //   },
  //   {
  //     question: '49 ÷ 7',
  //     answer: 7,
  //     options: [6, 7, 8],
  //   },
  //   {
  //     question: '6 × 8',
  //     answer: 48,
  //     options: [40, 48, 56],
  //   },
  //   {
  //     question: '72 ÷ 9',
  //     answer: 8,
  //     options: [6, 8, 10],
  //   },
  //   {
  //     question: '12 × 3',
  //     answer: 36,
  //     options: [30, 36, 42],
  //   },
  //   {
  //     question: '48 ÷ 6',
  //     answer: 8,
  //     options: [6, 8, 10],
  //   },
  //   {
  //     question: '10 × 5',
  //     answer: 50,
  //     options: [40, 50, 60],
  //   },
  //   {
  //     question: '100 ÷ 5',
  //     answer: 20,
  //     options: [15, 20, 25],
  //   },
  //   {
  //     question: '9 × 7',
  //     answer: 63,
  //     options: [54, 63, 72],
  //   },
  //   {
  //     question: '81 ÷ 9',
  //     answer: 9,
  //     options: [7, 9, 11],
  //   },
  //   {
  //     question: '11 × 4',
  //     answer: 44,
  //     options: [36, 44, 52],
  //   },
  //   {
  //     question: '88 ÷ 4',
  //     answer: 22,
  //     options: [18, 22, 26],
  //   },
  //   {
  //     question: '15 + 7',
  //     answer: 22,
  //     options: [18, 22, 26],
  //   },
  //   {
  //     question: '30 - 9',
  //     answer: 21,
  //     options: [18, 21, 24],
  //   },
  //   {
  //     question: '42 + 18',
  //     answer: 60,
  //     options: [55, 60, 65],
  //   },
  //   {
  //     question: '55 - 15',
  //     answer: 40,
  //     options: [35, 40, 45],
  //   },
  // ];

  // percentage: number = 0;
  // seconds: number = 20;

  // ngOnInit(): void {
  //   let randomIndex = Math.floor(Math.random() * this.data.length - 0 + 0);

  //   this.question = this.data[randomIndex];
  // }

  // ngAfterViewInit(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const endgame = this._endgame.nativeElement;

  //   gameplay.style.display = 'flex';
  //   endgame.style.display = 'none';

  //   const time = this._timeBar.nativeElement;

  //   console.log(this._timeBar);

  //   this.time = setInterval(() => {
  //     this.percentage += 1;

  //     this._timeBar.nativeElement.children[1].style.left = `-${this.percentage}px`;

  //     this.seconds--;

  //     console.log(this.left);
  //     console.log(this._timeBar.nativeElement.children[1].style.left);

  //     if (this.percentage >= 480) {
  //       clearInterval(this.time);

  //       const gameplay = this._gameplay.nativeElement;
  //       const endgame = this._endgame.nativeElement;

  //       gameplay.style.display = 'none';
  //       endgame.style.display = 'flex';
  //     }
  //   }, this.seconds);
  // }

  // tryAgain(): void {
  //   const gameplay = this._gameplay.nativeElement;
  //   const endgame = this._endgame.nativeElement;

  //   gameplay.style.display = 'flex';
  //   endgame.style.display = 'none';

  //   this.percentage = 0;
  //   this.seconds = 20;

  //   const containerOptions = this._containerOptions.nativeElement;

  //   for (let i = 0; i < containerOptions.children.length; i++) {
  //     containerOptions.children[i].children[0].classList.add('hidden');
  //   }

  //   this.time = setInterval(() => {
  //     this.percentage += 1;

  //     this._timeBar.nativeElement.children[1].style.left = `-${this.percentage}px`;

  //     this.seconds--;

  //     console.log(this.left);
  //     console.log(this._timeBar.nativeElement.children[1].style.left);

  //     if (this.percentage >= 480) {
  //       clearInterval(this.time);

  //       const gameplay = this._gameplay.nativeElement;
  //       const endgame = this._endgame.nativeElement;

  //       gameplay.style.display = 'none';
  //       endgame.style.display = 'flex';
  //     }
  //   }, this.seconds);
  // }

  // selectedNumber(number: number, e: any) {
  //   if (this.question.answer != number) {
  //     e.target.children[0].classList.remove('hidden');
  //     e.target.children[0].classList.add('cross');
  //     e.target.children[0].classList.remove('tick');
  //     e.target.children[0].src = 'assets/games/arithmetic/cross.png';

  //     this.percentage += 50;
  //   } else {
  //     const questionDiv = this._questionDiv.nativeElement;
  //     let randomIndex = Math.floor(Math.random() * this.data.length - 0 + 0);
  //     const containerOptions = this._containerOptions.nativeElement;

  //     e.target.children[0].classList.add('tick');
  //     e.target.children[0].classList.remove('cross');
  //     questionDiv.classList.add('right');
  //     e.target.children[0].classList.remove('hidden');

  //     this.answer = number.toString();

  //     console.log(e);

  //     this.percentage -= 50;

  //     e.target.children[0].src = 'assets/games/arithmetic/tick.png';

  //     setTimeout(() => {
  //       questionDiv.classList.remove('right');
  //       this.question = this.data[randomIndex];
  //       this.answer = '?';

  //       for (let i = 0; i < containerOptions.children.length; i++) {
  //         containerOptions.children[i].children[0].classList.add('hidden');
  //       }
  //     }, 500);
  //   }
  // }
}