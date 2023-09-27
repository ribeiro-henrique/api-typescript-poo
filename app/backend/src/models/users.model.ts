import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUser.model';
import User from '../database/models/User';

export default class UserModel implements IUserModel {
  private model = User;

  async findOne(email: IUser['email']): Promise<IUser | null> {
    const data = await this.model.findOne({ where: { email } });
    return data;
  }
}
