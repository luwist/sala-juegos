import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { Credentials, User } from '@app/models';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, query, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { AuthService } from '@app/services';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
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

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.users = [
      {
        avatar: 'assets/images/robot.png',
        username: 'Luwist',
        role: 'Administrador',
        email: 'luwist@test.com',
        password: 'admin123',
      },
      {
        avatar: 'assets/images/robot.png',
        username: 'StrogeBest',
        role: 'Usuario',
        email: 'strogebest@test.com',
        password: 'strogebest',
      },
      {
        avatar: 'assets/images/robot.png',
        username: 'Kwess',
        role: 'Usuario',
        email: 'kwess@test.com',
        password: 'qwerty123456',
      },
      {
        avatar: 'assets/images/robot.png',
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
    } catch (error) {
      console.log('Mostrar Toast', error);
    }
  }
}
