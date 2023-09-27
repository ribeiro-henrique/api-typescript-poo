import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUser.model';
import UserModel from '../models/users.model';
import { ServiceResponse } from '../Interfaces/Service.response';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async create(user: IUser): Promise<ServiceResponse<IUser>> {
    const newUser = await this.userModel.create(user);
    return { status: 'SUCCESSFUL', data: newUser };
  }
}
