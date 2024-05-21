import {
  AfterViewInit,
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
export class GameplayComponent implements AfterViewInit {
  @Output() changeScene = new EventEmitter<string>();

  @ViewChild('progressBar') private _progressBarRef!: ElementRef;
  @ViewChild('countdown') private _countdownRef!: ElementRef;
  @ViewChild('gameplay') private _gameplayRef!: ElementRef;

  progressPercentage = 100;
  countdownValue = 4;
  countdownTimer: any;
  gameTimer: any;

  ngAfterViewInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.toggleElement(this._gameplayRef, 'none');
    this.toggleElement(this._countdownRef, 'block');
    
    this.countdownTimer = setInterval(() => {
      this.countdownValue--;

      this.updateCountdown();

      if (this.countdownValue <= 0) {
        clearInterval(this.countdownTimer);

        this.startGame();
        this.toggleElement(this._gameplayRef, 'block');
        this.toggleElement(this._countdownRef, 'none');
      }
    }, 1000);
  }

  startTimer() {
    const progressBarElement = this._progressBarRef.nativeElement;

    this.gameTimer = setInterval(() => {
      this.progressPercentage--;

      progressBarElement.style.width = `${this.progressPercentage}%`;

      if (this.progressPercentage <= 1) {
        this.changeScene.emit(Scene.GameOver);
      }
    }, 120);
  }

  startGame(): void {
    this.startTimer();
  }

  toggleElement(element: ElementRef, display: string): void {
    const divElement = element.nativeElement as HTMLDivElement;

    divElement.style.display = display;
  }

  updateCountdown(): void {

  }
}
