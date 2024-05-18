import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { User, UserCredential } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private _auth: Auth, private _firebase: Firestore) {}

  async add(user: User, credential: UserCredential) {}
}
