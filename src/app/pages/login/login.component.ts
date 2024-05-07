import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { Account, UserCredential } from '@app/models';
import { AuthService, UserService } from '@app/services';
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
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  accounts: Account[] = [];

  selectedAccount!: Account;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.accounts = this._userService.accounts;
  }

  get controlEmail(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get controlPassword(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  async login(): Promise<void> {
    try {
      await this._authService.login({
        email: '',
        password: '',
      });

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
