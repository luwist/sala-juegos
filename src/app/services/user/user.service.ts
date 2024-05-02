import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users = [
    {
      avatar: 'avatar-luwist.png',
      username: 'Luwist',
      role: 'Administrador',
      email: 'luwist@test.com',
      password: 'admin123',
    },
    {
      avatar: 'avatar-strogebest.png',
      username: 'StrogeBest',
      role: 'Usuario',
      email: 'strogebest@test.com',
      password: 'strogebest',
    },
    {
      avatar: 'avatar-kwess.png',
      username: 'Kwess',
      role: 'Usuario',
      email: 'kwess@test.com',
      password: 'qwerty123456',
    },
    {
      avatar: 'avatar-chesseto.png',
      username: 'ChesseTo',
      role: 'Tester',
      email: 'chesseto@test.com',
      password: 'contraseña',
    },
  ];

  private _user = {
    avatar: '',
    username: '',
    role: '',
    email: '',
  };

  get user() {
    return this._user;
  }

  updateUser(user: any) {
    this._user = user;
  }
}
