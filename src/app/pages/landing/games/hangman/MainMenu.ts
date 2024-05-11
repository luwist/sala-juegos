import { loadImage } from './loaders';
import { alignHorizontal, alignVertical } from './position';

export class MainMenu {
  urlBase = 'assets/games/hangman';

  ui = {
    background: `${this.urlBase}/general_background_horizontal.png`,
    logo: `${this.urlBase}/general_logo_blue.png`,
    buttonPlay: `${this.urlBase}/main_menu_play.png`,
  };

  media = [
    {
      url: `${this.urlBase}/general_background_horizontal.png`,
      position: {
        horizontal: false,
        vertical: false,
        center: false,
      },
    },
  ];

  ctx!: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(): void {
    this.drawBackground();
    this.drawLogo();
    this.drawButtonPlay();
  }

  drawBackground(): void {
    loadImage(this.ui.background).then((image: any) => {
      this.ctx.drawImage(image, 0, 0);
    });
  }

  drawLogo(): void {
    loadImage(this.ui.logo).then((image: any) => {
      this.ctx.drawImage(image, alignHorizontal(418), 50);
    });
  }

  drawButtonPlay(): void {
    loadImage(this.ui.buttonPlay).then((image: any) => {
      this.ctx.drawImage(image, alignHorizontal(155), alignVertical(159));
    });
  }
}
