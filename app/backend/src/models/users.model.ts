import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUser.model';
import User from '../database/models/User';

export default class UserModel implements IUserModel {
  private model = User;

  async create(data: IUser): Promise<IUser> {
    const dbData = await this.model.create(data);
    return dbData;
  }
}
