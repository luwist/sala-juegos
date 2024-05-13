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
  @ViewChild('card') private _cardElement!: ElementRef;
  @ViewChild('game') private _gameElement!: ElementRef;

  @ViewChild('gameplay') private _gameplay!: ElementRef;
  @ViewChild('endgame') private _endgame!: ElementRef;

  private _currentCard!: number;

  ngAfterViewInit(): void {
    this._currentCard = this.randomCard();
  }

  higherSelected(): void {
    const card = this.randomCard();

    if (this._currentCard < card) {
      this.showEnd('welldone', '¡Ganaste!');
    } else {
      this.showEnd('gameover', 'Perdiste');
    }
  }

  lowerSelected(): void {
    const card = this.randomCard();

    if (this._currentCard > card) {
      this.showEnd('welldone', '¡Ganaste!');
    } else {
      this.showEnd('gameover', 'Perdiste');
    }
  }

  private showEnd(className: string, message: string): void {
    const element = this._gameElement.nativeElement;

    element.classList.add('show');
    element.childNodes[0].classList.add(className);
    element.childNodes[0].childNodes[0].innerText = message;
  }

  private randomCard(): number {
    const element = this._cardElement.nativeElement;

    let randomCard = Math.floor(Math.random() * 13 - 0 + 0);
    let x = randomCard * 92;
    let y = randomCard * 128;

    element.style.backgroundPosition = `-${x}px ${y}px`;

    return randomCard;
  }
}
