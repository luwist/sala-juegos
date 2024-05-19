import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { User, UserCredential } from '@app/models';
import { UserService } from '../user';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { UserRepository } from '@app/repositories';
import { Observable } from 'rxjs';
import { IsLoggedIn } from '@app/models/is-logged-in.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser!: IsLoggedIn;

  constructor(private _auth: Auth, private _userRepository: UserRepository) {}

  get currentUser(): IsLoggedIn {
    return this._currentUser;
  }

  async login(credential: UserCredential): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    onAuthStateChanged(this._auth, (user) => {
      const id = user?.uid as string;

      const currentUser = this._userRepository.getUserById(id);

      if (!currentUser) {
        //   this._currentUser.subscribe(data => {
        //     this.currentUser = {
        //       user: data,
        //       isLoggedIn: true
        //     };
        //   });
      }
    });
  }

  async register(credential: UserCredential): Promise<void> {
    await createUserWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );
  }
}
