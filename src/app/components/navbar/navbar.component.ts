import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IsLoggedIn } from '@app/models/is-logged-in.interface';
import { AuthService } from '@app/services';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Observable } from 'rxjs';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideLogOut } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    MenuModule,
    CommonModule,
    BrnMenuTriggerDirective,

    HlmMenuComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,

    HlmButtonDirective,
    HlmIconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [provideIcons({ lucideChevronDown, lucideLogOut })],
})
export class NavbarComponent implements OnInit {
  currentUser!: IsLoggedIn;
  items!: Array<any>;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;

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
