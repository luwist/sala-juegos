import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss',
})
export class HangmanComponent implements AfterViewInit {
  showPauseSettings: boolean = false;
  keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  @ViewChild('mainMenu') private _mainMenu!: ElementRef;
  @ViewChild('gameplay') private _gameplay!: ElementRef;

  ngAfterViewInit(): void {
    const gameplay = this._gameplay.nativeElement;

    gameplay.style.display = 'none';
  }

  buttonPlay(): void {
    const gameplay = this._gameplay.nativeElement;
    const mainMenu = this._mainMenu.nativeElement;

    mainMenu.style.display = 'none';
    gameplay.style.display = 'block';
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
  }
}
