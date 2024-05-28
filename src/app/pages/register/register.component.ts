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
import { AuthService } from '@app/services';
import { ButtonModule } from 'primeng/button';

import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToastComponent,
    ReactiveFormsModule,

    HlmButtonDirective,
    HlmInputDirective,
    HlmLabelDirective,
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

      const registerRequest = this.registerForm.getRawValue();

      this.buttonText = 'Cargando...';

      await this._authService.register(registerRequest);

      this._router.navigateByUrl('/');
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
