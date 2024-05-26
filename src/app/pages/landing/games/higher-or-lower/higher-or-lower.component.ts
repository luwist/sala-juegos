import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GameplayComponent } from './gameplay/gameplay.component';
import { GameOverComponent } from './game-over/game-over.component';
import { Scene } from '@app/enums/scene.enum';

@Component({
  selector: 'app-higher-or-lower',
  standalone: true,
  imports: [GameplayComponent, GameOverComponent],
  templateUrl: './higher-or-lower.component.html',
  styleUrl: './higher-or-lower.component.scss',
})
export class HigherOrLowerComponent {
  currentScene: string = Scene.Gameplay;

  // @ViewChild('card') private _cardRef!: ElementRef;
  // @ViewChild('cardShowed') private _cardShowedRef!: ElementRef;
  // @ViewChild('cardBack') private _cardBackRef!: ElementRef;
  // // @ViewChild('game') private _gameElement!: ElementRef;

  // // @ViewChild('gameplay') private _gameplay!: ElementRef;
  // @ViewChild('endgame') private _endgameRef!: ElementRef;
  // @ViewChild('containerButtons') private _containerButtons!: ElementRef;

  // private _currentCard!: number;
  // totalCard = 5;

  // ngAfterViewInit(): void {
  //   this._currentCard = this.nextCard();

  //   const cardEndgameElement = this._endgameRef.nativeElement as HTMLDivElement;

  //   cardEndgameElement.style.display = 'none';
  // }

  // onChangeScene(scene: string): void {
  //   this.currentScene = scene;
  // }

  // startGame(): void {}

  // nextCard(): number {
  //   const cardShowedElement = this._cardShowedRef
  //     .nativeElement as HTMLDivElement;
  //   const cardElement = this._cardRef.nativeElement as HTMLDivElement;
  //   const cardBackElement = this._cardBackRef.nativeElement as HTMLDivElement;
  //   const cardFrontElement = cardElement.children[0] as HTMLDivElement;

  //   const cardEndgameElement = this._endgameRef.nativeElement as HTMLDivElement;

  //   let randomCard = Math.floor(Math.random() * 13 - 0 + 0);
  //   let x = randomCard * 92;
  //   let y = randomCard * 128;

  //   cardFrontElement.style.backgroundPosition = `-${x}px ${y}px`;

  //   this.totalCard--;

  //   if (this.totalCard <= 0) {
  //     cardElement.classList.add('show-animation', 'show');

  //     cardBackElement.style.opacity = '0';

  //     setTimeout(() => {
  //       cardElement.style.opacity = '0';

  //       cardElement.classList.remove('show-animation', 'show');

  //       cardShowedElement.style.backgroundPosition = `-${x}px ${y}px`;

  //       this.resetButtons();

  //       cardEndgameElement.style.display = 'flex';
  //     }, 1000);
  //   } else {
  //     cardElement.classList.add('show-animation', 'show');

  //     setTimeout(() => {
  //       cardElement.classList.remove('show-animation', 'show');

  //       cardShowedElement.style.backgroundPosition = `-${x}px ${y}px`;

  //       this.resetButtons();
  //     }, 1000);
  //   }

  //   return randomCard;
  // }

  // replay(): void {
  //   const cardElement = this._cardRef.nativeElement as HTMLDivElement;
  //   const cardBackElement = this._cardBackRef.nativeElement as HTMLDivElement;
  //   const cardEndgameElement = this._endgameRef.nativeElement as HTMLDivElement;

  //   cardEndgameElement.style.display = 'none';

  //   cardBackElement.style.opacity = '1';
  //   cardElement.style.opacity = '1';

  //   this.totalCard = 5;

  //   this._currentCard = this.nextCard();
  // }

  // high(e: Event): void {
  //   const buttonElement = e.target as HTMLButtonElement;
  //   const card = this.nextCard();

  //   if (this._currentCard < card) {
  //     buttonElement.classList.add('right');
  //   } else {
  //     buttonElement.classList.add('wrong');
  //   }

  //   this._currentCard = card;
  // }

  // low(e: Event): void {
  //   const buttonElement = e.target as HTMLButtonElement;
  //   const card = this.nextCard();

  //   if (this._currentCard > card) {
  //     buttonElement.classList.add('right');
  //   } else {
  //     buttonElement.classList.add('wrong');
  //   }

  //   this._currentCard = card;
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
}
