import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() logo!: string;
  @Input() name!: string;
  @Input() src!: string;
}
