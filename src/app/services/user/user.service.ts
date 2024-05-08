import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Role } from '@app/enums';
import { Account, User } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _accounts: Account[] = [
    {
      avatar: 'assets/images/avatar-luwist.png',
      username: 'Luwist',
      email: 'luwist@test.com',
      password: 'admin123',
      role: Role.Administrator,
    },
    {
      avatar: 'assets/images/avatar-strogebest.png',
      username: 'StrogeBest',
      email: 'strogebest@test.com',
      password: 'strogebest',
      role: Role.User,
    },
    {
      avatar: 'assets/images/avatar-kwess.png',
      username: 'Kwess',
      email: 'kwess@test.com',
      password: 'qwerty123456',
      role: Role.User,
    },
    {
      avatar: 'assets/images/avatar-chesseto.png',
      username: 'ChesseTo',
      email: 'chesseto@test.com',
      password: 'contraseña',
      role: Role.Tester,
    },
  ];

  private _currentUser!: User | null;

  constructor(private _firebase: Firestore) {}

  get currentUser() {
    return this._currentUser;
  }

  get accounts() {
    return this._accounts;
  }

  async updateCurrentUserByEmail(email: string) {
    const user = await this.getUserByEmail(email);

    this._currentUser = user;
  }

  private async getUserByEmail(email: string): Promise<User | null> {
    let user = null;

    const q = query(
      collection(this._firebase, 'users'),
      where('email', '==', email)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const u = doc.data() as User;

      if (u.email == email) {
        user = u;
      }
    });

    return user;
  }
}
