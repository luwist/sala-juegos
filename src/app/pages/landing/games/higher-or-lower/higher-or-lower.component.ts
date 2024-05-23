import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-higher-or-lower',
  standalone: true,
  imports: [],
  templateUrl: './higher-or-lower.component.html',
  styleUrl: './higher-or-lower.component.scss',
})
export class HigherOrLowerComponent implements AfterViewInit {
  // @ViewChild('card') private _cardElement!: ElementRef;
  // @ViewChild('game') private _gameElement!: ElementRef;

  // @ViewChild('gameplay') private _gameplay!: ElementRef;
  // @ViewChild('endgame') private _endgame!: ElementRef;
  // @ViewChild('containerButtons') private _containerButtons!: ElementRef;

  // private _currentCard!: number;
  // totalCard = 48;

  ngAfterViewInit(): void {
    // this._currentCard = this.randomCard();
  }

  // higherSelected(e: any): void {
  //   const buttonElement = e.target as HTMLButtonElement;
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(buttonElement);

  //   const card = this.randomCard();

  //   if (this._currentCard < card) {
  //     buttonElement.classList.add('right');

  //     // this.showEnd('welldone', '¡Ganaste!');
  //   } else {
  //     buttonElement.classList.add('wrong');

  //     // this.showEnd('gameover', 'Perdiste');
  //   }

  //   setTimeout(() => {
  //     this.resetButtons();
  //   }, 500);
  // }

  // lowerSelected(e: any): void {
  //   const buttonElement = e.target as HTMLButtonElement;

  //   const card = this.randomCard();

  //   if (this._currentCard > card) {
  //     buttonElement.classList.add('right');
  //   } else {
  //     buttonElement.classList.add('wrong');
  //   }

  //   setTimeout(() => {
  //     this.resetButtons();
  //   }, 500);
  // }

  // resetButtons(): void {
  //   const containerButtons = this._containerButtons
  //     .nativeElement as HTMLDivElement;

  //   for (let i = 0; i < containerButtons.children.length; i++) {
  //     const buttonElement = containerButtons.children[i] as HTMLButtonElement;

  //     buttonElement.classList.remove('right');
  //     buttonElement.classList.remove('wrong');
  //   }
  // }

  // private showEnd(className: string, message: string): void {
  //   const element = this._gameElement.nativeElement;

  //   element.classList.add('show');
  //   element.childNodes[0].classList.add(className);
  //   element.childNodes[0].childNodes[0].innerText = message;
  // }

  // private randomCard(): number {
  //   const element = this._cardElement.nativeElement;

  //   let randomCard = Math.floor(Math.random() * 13 - 0 + 0);
  //   let x = randomCard * 92;
  //   let y = randomCard * 128;

  //   element.style.backgroundPosition = `-${x}px ${y}px`;

  //   return randomCard;
  // }
}
