import { Component, EventEmitter, Output } from '@angular/core';
import { Scene } from '../scene.enum';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss',
})
export class GameplayComponent {
  @Output() backMainMenu = new EventEmitter<string>();

  answer = 'danonino';
  score = 0;

  keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  onBackMainMenu(): void {
    this.backMainMenu.emit(Scene.MainMenu);
  }

  onSelectedKey(e: Event): void {
    const buttonElement = e.target as HTMLButtonElement;
    const key = buttonElement.dataset['key'] as string;

    this.answer.indexOf(key) !== -1
      ? buttonElement.classList.add('right')
      : buttonElement.classList.add('wrong');
  }
}
