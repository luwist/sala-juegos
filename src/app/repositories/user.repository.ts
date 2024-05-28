import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private _firestore: Firestore) {}

  async add(registerRequest: any, id: string) {
    const collectionRef = doc(this._firestore, 'users', id);

    await setDoc(collectionRef, {
      username: registerRequest.username,
      pictureUrl: "assets/images/avatar-luwist.png",
      role: 'usuario'
    });
  }
}
