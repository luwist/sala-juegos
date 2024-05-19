import { Component, OnInit, ViewContainerRef } from '@angular/core';
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
import { AuthService } from '@app/services';
import {
  DropdownComponent,
  SelectComponent,
  ToastComponent,
} from '@app/components';
import { CommonModule } from '@angular/common';
import { AuthError } from '@app/enums/auth-error.enum';
import { Role } from '@app/enums';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    DividerModule,
    ToastComponent,
    ReactiveFormsModule,
    DropdownComponent,
    SelectComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  accounts: Account[] = [
    {
      pictureUrl: 'assets/images/avatar-luwist.png',
      username: 'Luwist',
      email: 'luwist@test.com',
      password: 'admin123',
      role: Role.Administrator,
    },
    {
      pictureUrl: 'assets/images/avatar-strogebest.png',
      username: 'StrogeBest',
      email: 'strogebest@test.com',
      password: 'strogebest',
      role: Role.User,
    },
    {
      pictureUrl: 'assets/images/avatar-kwess.png',
      username: 'Kwess',
      email: 'kwess@test.com',
      password: 'qwerty123456',
      role: Role.User,
    },
    {
      pictureUrl: 'assets/images/avatar-chesseto.png',
      username: 'ChesseTo',
      email: 'chesseto@test.com',
      password: 'contraseña',
      role: Role.Tester,
    },
  ];

  selectedAccount!: Account;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  buttonText: string = 'Ingresar';
  showError: boolean = false;
  messageError!: string;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _viewContainerRef: ViewContainerRef
  ) {}

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSelectedAccount(): void {
    const credential = this.selectedAccount as UserCredential;

    this.loginForm.patchValue(credential);
  }

  async login(e: Event): Promise<void> {
    try {
      e.preventDefault();

      this.loginForm.markAsPending();

      const credentials = this.loginForm.getRawValue() as UserCredential;

      this.buttonText = 'Cargando...';

      await this._authService.login(credentials);

      this._router.navigateByUrl('/');
    } catch (error: any) {
      switch (error.code) {
        case AuthError.invalidCredential:
          this.showToast(
            'Correo electronico o contraseña incorrecta. Intentelo de nuevo'
          );
          break;
      }
    }
  }

  showToast(message: string): void {
    const dinamicComponent =
      this._viewContainerRef.createComponent(ToastComponent);

    dinamicComponent.instance.message = message;

    this.buttonText = 'Ingresar';
  }
}
