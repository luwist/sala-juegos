import { Role } from './role.interface';

export interface User {
  userId: string;
  pictureUrl: string;
  username: string;
  role: Role;
}
