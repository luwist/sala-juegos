import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Credentials, User } from '@app/models';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _auth: Auth,
    private _firebase: Firestore,
    private _userService: UserService
  ) {}

  async login(credentials: Credentials) {
    await signInWithEmailAndPassword(
      this._auth,
      credentials.email,
      credentials.password
    );

    const users = collection(this._firebase, 'users');
    const col = collectionData(users);

    col.subscribe((data) => {
      data.forEach((user: any) => {
        if (user.email == credentials.email) {
          this._userService.user = user;
        }
      });
    });
  }
}
