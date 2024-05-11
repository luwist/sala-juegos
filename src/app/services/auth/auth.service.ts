import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { UserCredential } from '@app/models';
import { UserService } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth, private _userService: UserService) {}

  async login(credential: UserCredential): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    await this._userService.updateCurrentUserByEmail(credential.email);
  }

  async register(credential: UserCredential): Promise<void> {
    try {
      await createUserWithEmailAndPassword(
        this._auth,
        credential.email,
        credential.password
      );
    } catch (error) {
      console.log(error);
    }
  }
}
