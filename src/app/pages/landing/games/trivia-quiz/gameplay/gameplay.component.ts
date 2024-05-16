import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss',
})
export class GameplayComponent {
  @Output() playEventEmitter = new EventEmitter<boolean>();

  home(): void {
    this.playEventEmitter.emit(false);
  }
}
