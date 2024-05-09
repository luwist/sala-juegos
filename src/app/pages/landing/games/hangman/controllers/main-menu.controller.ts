import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainMenuController {
  bgLandscape: HTMLImageElement = new Image();
  title: HTMLImageElement = new Image();
  buttonPlayBG: HTMLImageElement = new Image();

  draw(): void {}

  private init(): void {}

  private buttonPlay(): void {}

  private drawTitle(): void {
    // this.bgLandscape.onload = () => {
    //   this.ctx.drawImage(this.bgLandscape, 0, 0);
    // };
    // this.bgLandscape.src =
    //   './assets/games/hangman/general_background_horizontal.png';
  }
}
