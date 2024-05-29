import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Account, User, UserCredential } from '@app/models';
import { UserRepository } from '@app/repositories';
import { IsLoggedIn } from '@app/models/is-logged-in.interface';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: IsLoggedIn = {
    user: null,
    isAuth: false,
  };

  constructor(
    private _auth: Auth,
    private _firestore: Firestore,
    private _userRepository: UserRepository
  ) {}

  get currentUser(): IsLoggedIn {
    return this._currentUser;
  }

  async login(credential: UserCredential, account: Account): Promise<void> {
    const user = await signInWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    const docRef = doc(this._firestore, 'users', user.user.uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (account != undefined) {
      this._currentUser = {
        user: account as User,
        isAuth: true,
      };
    } else {
      this._currentUser = {
        user: data as User,
        isAuth: true,
      };
    }
  }

  async register(registerRequest: any): Promise<void> {
    const user = await createUserWithEmailAndPassword(
      this._auth,
      registerRequest.email,
      registerRequest.password
    );

    await this._userRepository.add(registerRequest, user.user.uid);
  }
}
