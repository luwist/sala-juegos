import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastComponent } from '@app/components';
import { User, UserCredential } from '@app/models';
import { AuthService, UserService } from '@app/services';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToastComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  buttonText: string = 'Crear cuenta';
  showError: boolean = false;
  messageError!: string;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router,
    private _viewContainerRef: ViewContainerRef
  ) {}

  get usernameControl(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  async login(e: Event): Promise<void> {
    try {
      e.preventDefault();

      this.registerForm.markAsPending();

      const credentials = this.registerForm.getRawValue() as UserCredential;
      const user = {
        username: 'TYU',
        role: 'tester',
      };

      this.buttonText = 'Cargando...';

      console.log(credentials);

      // await this._authService.register(credentials, user);

      // this._router.navigateByUrl('/');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-credential':
          this.showToast(
            'Correo electronico o contraseña incorrecta. Intentelo de nuevo'
          );

          break;
      }
      console.log(error.code);
      console.log(error.message);
    }
  }

  showToast(message: string): void {
    const dinamicComponent =
      this._viewContainerRef.createComponent(ToastComponent);

    dinamicComponent.instance.message = message;

    this.buttonText = 'Crear Cuenta';
  }
}
