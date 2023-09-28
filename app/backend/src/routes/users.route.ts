import { Router, Request, Response } from 'express';
import Validations from '../middlewares/Validations';
import UserController from '../controllers/users.controller';
import TokenValidation from '../middlewares/Token.validation';

const userController = new UserController();
const usersRoute = Router();

usersRoute.get(
  '/role',
  TokenValidation.validateToken,

  (req: Request, res: Response) => UserController.getRole(req, res),
);

usersRoute.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);

export default usersRoute;
