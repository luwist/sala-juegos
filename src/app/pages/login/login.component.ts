import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  users: any = [];

  selectedUser!: any;

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.users = [
      {
        avatar: 'assets/images/robot.png',
        username: 'Luwist',
        role: 'Administrador',
        email: 'luwist@test.com',
        password: '123456',
      },
      {
        avatar: 'assets/images/robot.png',
        username: 'StrogeBest',
        role: 'Usuario',
        email: 'strogebest@test.com',
        password: '123456',
      },
      {
        avatar: 'assets/images/robot.png',
        username: 'Kwess',
        role: 'Usuario',
        email: 'strogebest@test.com',
        password: '123456',
      },
      {
        avatar: 'assets/images/robot.png',
        username: 'ChesseTo',
        role: 'Tester',
        email: 'chesseto@test.com',
        password: '123456',
      },
    ];
  }

  login(): void {
    this.router.navigateByUrl('/');
  }
}
