import { Router, Request, Response } from 'express';
import Validations from '../middlewares/Validations';
import UserController from '../controllers/users.controller';

const userController = new UserController();
const usersRoute = Router();

usersRoute.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);

export default usersRoute;
