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
  @ViewChild('card') private _cardRef!: ElementRef;
  @ViewChild('cardShowed') private _cardShowedRef!: ElementRef;
  // @ViewChild('game') private _gameElement!: ElementRef;

  // @ViewChild('gameplay') private _gameplay!: ElementRef;
  // @ViewChild('endgame') private _endgame!: ElementRef;
  @ViewChild('containerButtons') private _containerButtons!: ElementRef;

  private _currentCard!: number;
  // totalCard = 48;

  ngAfterViewInit(): void {
    this._currentCard = this.nextCard();
  }

  nextCard(): number {
    const cardShowedElement = this._cardShowedRef
      .nativeElement as HTMLDivElement;
    const cardElement = this._cardRef.nativeElement as HTMLDivElement;
    const cardFrontElement = cardElement.children[0] as HTMLDivElement;

    let randomCard = Math.floor(Math.random() * 13 - 0 + 0);
    let x = randomCard * 92;
    let y = randomCard * 128;

    cardFrontElement.style.backgroundPosition = `-${x}px ${y}px`;

    cardElement.classList.add('show-animation', 'show');

    setTimeout(() => {
      cardElement.classList.remove('show-animation', 'show');

      cardShowedElement.style.backgroundPosition = `-${x}px ${y}px`;

      this.resetButtons();
    }, 1000);

    return randomCard;
  }

  high(e: Event): void {
    const buttonElement = e.target as HTMLButtonElement;
    const card = this.nextCard();

    if (this._currentCard < card) {
      buttonElement.classList.add('right');
    } else {
      buttonElement.classList.add('wrong');
    }

    this._currentCard = card;
  }

  low(e: Event): void {
    const buttonElement = e.target as HTMLButtonElement;
    const card = this.nextCard();

    if (this._currentCard > card) {
      buttonElement.classList.add('right');
    } else {
      buttonElement.classList.add('wrong');
    }

    this._currentCard = card;
  }

  resetButtons(): void {
    const containerButtons = this._containerButtons
      .nativeElement as HTMLDivElement;

    for (let i = 0; i < containerButtons.children.length; i++) {
      const buttonElement = containerButtons.children[i] as HTMLButtonElement;

      buttonElement.classList.remove('right');
      buttonElement.classList.remove('wrong');
    }
  }
}
