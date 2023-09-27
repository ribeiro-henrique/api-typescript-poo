// import { IUser } from '../Interfaces/users/IUser';
import * as bcrypt from 'bcryptjs';
import { IUserModel } from '../Interfaces/users/IUser.model';
import UserModel from '../models/users.model';
import { ServiceResponse } from '../Interfaces/Service.response';
// import { IToken } from '../Interfaces/users/IToken';
import Jwt from '../utils/jwt';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async login(email: string, password: string): Promise<ServiceResponse<string>> {
    const user = await this.userModel.findOne(email);

    if (!user || bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const { id, role } = user;
    const token = Jwt.generateToken({ id, role });
    return { status: 'SUCCESSFUL', data: token };
  }
}
