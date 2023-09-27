import { Router, Request, Response } from 'express';
import Validations from '../middlewares/Validations';

const usersRoute = Router();

usersRoute.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => res.send('Loguei'),
);

export default usersRoute;
