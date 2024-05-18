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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _auth: Auth,
    private _userService: UserService,
    private _userRepository: UserRepository,
    private _firebase: Firestore
  ) {}

  async login(credential: UserCredential): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    onAuthStateChanged(this._auth, (user) => {
      console.log(user);
    });
  }

  async register(credential: UserCredential, userAcc: User): Promise<void> {
    await createUserWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    onAuthStateChanged(this._auth, async (user) => {
      const uid = user?.uid as string;
      const userRef = await doc(this._firebase, 'users', uid);

      await setDoc(userRef, userAcc);
    });
  }
}
