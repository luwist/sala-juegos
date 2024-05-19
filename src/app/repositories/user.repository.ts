import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User, UserCredential } from '@app/models';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private _auth: Auth, private _firestore: Firestore) {}

  async add(user: User, credential: UserCredential) {}

  getUserById(id: string): Observable<User> {
    const documentRef = doc(this._firestore, `users/${id}`);

    return from(getDoc(documentRef)).pipe(
      map((docSnap) => {
        return docSnap.data() as User;
      })
    );
  }
}
