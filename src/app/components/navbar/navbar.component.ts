import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IsLoggedIn } from '@app/models/is-logged-in.interface';
import { AuthService } from '@app/services';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ButtonModule, MenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  currentUser$ = new Observable<IsLoggedIn>();
  items!: Array<any>;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this._authService.currentUser;

    this.items = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user',
      },
      {
        label: 'Configuraciones',
        icon: 'pi pi-cog',
      },
      {
        separator: true,
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }

  logout(): void {
    this._router.navigateByUrl('login');
  }
}
