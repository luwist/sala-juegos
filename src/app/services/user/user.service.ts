import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
