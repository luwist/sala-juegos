import { Role } from '@app/enums';

export interface Account {
  avatar: string;
  username: string;
  email: string;
  password: string;
  role: Role;
}
