import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@app/components';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
