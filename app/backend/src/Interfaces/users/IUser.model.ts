import { IUser } from './IUser';

export interface IUserModel {
  create(data: Partial<IUser>): Promise<IUser>;
}
