import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FormsModule,
        InputTextModule,
        PasswordModule,
        ButtonModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private router: Router) { }

    login(): void {
        console.log("AAAAAAA Login");

        this.router.navigateByUrl('home');
    }
}
