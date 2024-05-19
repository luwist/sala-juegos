import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { User, UserCredential } from '@app/models';
import { UserRepository } from '@app/repositories';
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

      currentUser.subscribe((data) => {
        this._currentUser = {
          user: data as User,
          loggedIn: true,
        };

        console.log(this._currentUser);
      });

      console.log(this._currentUser);
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
