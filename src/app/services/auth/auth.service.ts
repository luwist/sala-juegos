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
    try {
      await signInWithEmailAndPassword(
        this._auth,
        credentials.email,
        credentials.password
      );

      this.updateUserByEmail(credentials.email);
    } catch (error) {
      throw error;
    }
  }

  private async updateUserByEmail(email: string): Promise<void> {
    const users = collection(this._firebase, 'users');
    const q = query(users, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      this._userService.updateUser(doc.data());
    });
  }
}
