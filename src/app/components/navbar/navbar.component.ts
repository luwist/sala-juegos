import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@app/services/user/user.service';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ButtonModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  currentUser!: any;
  items!: Array<any>;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this._userService.currentUser;

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
        routerLink: '/login',
      },
    ];
  }
}
