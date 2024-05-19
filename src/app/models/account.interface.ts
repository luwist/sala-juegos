import { Role } from '@app/enums';

export interface Account {
  pictureUrl: string;
  username: string;
  email: string;
  password: string;
  role: Role;
}
