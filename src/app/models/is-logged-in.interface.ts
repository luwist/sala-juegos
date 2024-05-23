import { User } from './user.interface';

export interface IsLoggedIn {
  user: User | null;
  isAuth: boolean;
}