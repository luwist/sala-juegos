import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Credentials } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth, private _firebase: Firestore) {}

  async login(credentials: Credentials) {
    await signInWithEmailAndPassword(
      this._auth,
      credentials.email,
      credentials.password
    );

    const users = collection(this._firebase, 'users');
    const q = query(users, where('email', '==', credentials.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }
}
