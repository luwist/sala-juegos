import { loadImage } from './loaders';
import { alignHorizontal, alignTop, alignVertical } from './position';

export class Gameplay {
  urlBase = 'assets/games/hangman';

  ui = {
    background: `${this.urlBase}/general_background_horizontal.png`,
    gallow: `${this.urlBase}/animation_gallow.png`,
    buttonPause: `${this.urlBase}/gameplay_pause.png`,
  };

  ctx!: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(): void {
    this.drawBackground();
    this.drawGallow();
    this.drawButtonPause();
  }

  drawKeyboard(): void {
    this.ctx.fillStyle = '#0000ff';
    this.ctx.font = 'bold 32px caveat';

    const keyboard = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    for (let i = 0; i < 3; i++) {
      console.log(`-----------------------------`);
      console.log(`Indice: ${i}`);
      for (let j = 0; j < keyboard[i].length; j++) {
        console.log(`Letra: ${keyboard[i][j]}`);
        this.ctx.fillText(keyboard[i][j], j * 30, i * 50);
      }
      console.log(`-----------------------------`);
    }
  }

  drawBackground(): void {
    loadImage(this.ui.background).then((image: any) => {
      this.ctx.drawImage(image, 0, 0);
      this.drawKeyboard();
    });
  }

  drawGallow(): void {
    loadImage(this.ui.gallow).then((image: any) => {
      this.ctx.drawImage(image, 960 - 303 - 50, alignVertical(305));
    });
  }

  drawButtonPause(): void {
    loadImage(this.ui.buttonPause).then((image: any) => {
      this.ctx.drawImage(image, 960 - 72 - 20, 20);
    });
  }

  isWin(): void {}

  checkWin(): void {}

  endGame(): void {}
}
