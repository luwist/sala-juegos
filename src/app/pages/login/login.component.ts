import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { Credentials, User } from '@app/models';
import { AuthService } from '@app/services';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    DividerModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  users: Array<User> = [];

  selectedUser!: User;

  loginForm: Credentials = {
    email: '',
    password: '',
  };

  email: string = '';
  password: string = '';

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.users = [
      {
        avatar: 'assets/images/avatar-luwist.png',
        username: 'Luwist',
        role: 'Administrador',
        email: 'luwist@test.com',
        password: 'admin123',
      },
      {
        avatar: 'assets/images/avatar-strogebest.png',
        username: 'StrogeBest',
        role: 'Usuario',
        email: 'strogebest@test.com',
        password: 'strogebest',
      },
      {
        avatar: 'assets/images/avatar-kwess.png',
        username: 'Kwess',
        role: 'Usuario',
        email: 'kwess@test.com',
        password: 'qwerty123456',
      },
      {
        avatar: 'assets/images/avatar-chesseto.png',
        username: 'ChesseTo',
        role: 'Tester',
        email: 'chesseto@test.com',
        password: 'contraseña',
      },
    ];
  }

  selectUser(): void {
    const user = this.selectedUser;

    if (user !== undefined) {
      this.loginForm = user;
    }
  }

  async login(): Promise<void> {
    try {
      await this._authService.login(this.loginForm);

      this._router.navigateByUrl('/');
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: '',
        detail:
          'Correo Electronico o Contraseña incorrecta. Intentelo de nuevo',
      });
    }
  }
}
