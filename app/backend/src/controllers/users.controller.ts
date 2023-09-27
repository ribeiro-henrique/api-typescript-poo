import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/users.service';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public async login(req: Request, res: Response) {
    const { email } = req.body;
    const { status, data } = await this.userService.create(email);
    res.status(mapStatusHTTP(status)).json(data);
  }
}
