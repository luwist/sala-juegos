import { Injectable } from '@angular/core';
import { User } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user!: User;
}
