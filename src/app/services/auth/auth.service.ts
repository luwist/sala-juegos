import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { UserCredential } from '@app/models';
import { UserService } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth, private _userService: UserService) {}

  async login(credential: UserCredential): Promise<void> {
    try {
      await signInWithEmailAndPassword(
        this._auth,
        credential.email,
        credential.password
      );

      await this._userService.updateCurrentUserByEmail(credential.password);
    } catch (error: any) {
      throw error;
    }
  }
}
