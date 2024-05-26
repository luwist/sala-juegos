import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss',
})
export class GameplayComponent implements AfterViewInit {
  @ViewChild('cardAnimation') private _cardAnimationRef!: ElementRef;
  @ViewChild('cardBack') private _cardBackRef!: ElementRef;
  @ViewChild('card') private _cardRef!: ElementRef;

  totalCard: number = 52;
  currentNumberCard!: number;

  ngAfterViewInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.currentNumberCard = this.nextCard();
  }

  randomCardPosition(): Position {
    const randomColumn = Math.floor(Math.random() * 13 - 0 + 0);
    const randomRow = Math.floor(Math.random() * 4 - 0 + 0);

    const widthCard = 92;
    const heightCard = 128;

    return {
      x: widthCard * randomColumn,
      y: heightCard * randomRow,
    };
  }

  nextCard(): number {
    const cardElement = this._cardRef.nativeElement as HTMLDivElement;
    const cardBackElement = this._cardBackRef.nativeElement as HTMLDivElement;
    const cardAnimationElement = this._cardAnimationRef
      .nativeElement as HTMLDivElement;

    const cardFront = cardAnimationElement.children[0] as HTMLDivElement;

    const positionCard = this.randomCardPosition();

    this.totalCard--;

    if (this.totalCard <= 0) {
      cardFront.style.backgroundPosition = `-${positionCard.x}px ${positionCard.y}px`;

      cardAnimationElement.classList.add('show-animation', 'show');

      cardBackElement.style.opacity = '0';

      setTimeout(() => {
        cardAnimationElement.classList.remove('show-animation', 'show');

        cardElement.style.backgroundPosition = `-${positionCard.x}px ${positionCard.y}px`;
      }, 1000);
    } else {
      cardFront.style.backgroundPosition = `-${positionCard.x}px ${positionCard.y}px`;

      cardAnimationElement.classList.add('show-animation', 'show');

      setTimeout(() => {
        cardAnimationElement.classList.remove('show-animation', 'show');

        cardElement.style.backgroundPosition = `-${positionCard.x}px ${positionCard.y}px`;
      }, 1000);
    }

    return positionCard.x / 92;
  }

  checkDeck(): void {
    if (this.totalCard <= 0) {
    }
  }

  onHigher(e: Event): void {
    const card = this.nextCard();

    card > this.currentNumberCard
      ? this.toggleState(e, 'right')
      : this.toggleState(e, 'wrong');

    this.currentNumberCard = card;
  }

  onLower(e: Event): void {
    const card = this.nextCard();

    card < this.currentNumberCard
      ? this.toggleState(e, 'right')
      : this.toggleState(e, 'wrong');

    this.currentNumberCard = card;
  }

  toggleState(e: Event, state: string): void {
    const buttonElement = e.target as HTMLButtonElement;

    buttonElement.classList.toggle(state);

    setTimeout(() => {
      buttonElement.classList.toggle(state);
    }, 1000);
  }
}
