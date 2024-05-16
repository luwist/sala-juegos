import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  @Output() playEventEmitter = new EventEmitter<boolean>();

  play(): void {
    this.playEventEmitter.emit(true);
  }
}
