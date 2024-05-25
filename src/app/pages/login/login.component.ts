import { Component } from '@angular/core';
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
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';

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

    HlmButtonDirective,
    HlmInputDirective,
    HlmLabelDirective,
    HlmSeparatorDirective,

    BrnSelectImports,
    HlmSelectImports,

    BrnSeparatorComponent,
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  buttonText: string = 'Ingresar';
  showError: boolean = false;
  messageError!: string;

  constructor(private _authService: AuthService, private _router: Router) {}

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSelectedAccount(account: Account): void {
    const userCredential = account as UserCredential;

    this.loginForm.patchValue(userCredential);
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
          break;
      }
    }
  }
}
