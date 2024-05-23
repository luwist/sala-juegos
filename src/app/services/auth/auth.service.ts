import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { User, UserCredential } from '@app/models';
import { UserRepository } from '@app/repositories';
import { IsLoggedIn } from '@app/models/is-logged-in.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = new BehaviorSubject<IsLoggedIn>({
    user: null,
    isAuth: false,
  });

  constructor(private _auth: Auth, private _userRepository: UserRepository) {}

  get currentUser(): Observable<IsLoggedIn> {
    return this._currentUser.asObservable();
  }

  async login(credential: UserCredential): Promise<void> {
    const userCredential = await signInWithEmailAndPassword(
      this._auth,
      credential.email,
      credential.password
    );

    const id = userCredential.user.uid;

    this._userRepository.getUserById(id).subscribe((data) => {
      this._currentUser.next({
        user: data,
        isAuth: true,
      });
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
