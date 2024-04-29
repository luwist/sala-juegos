import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCardComponent } from '@app/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
