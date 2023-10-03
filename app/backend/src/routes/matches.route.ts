import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matches.controller';
import TokenValidation from '../middlewares/Token.validation';
import Validations from '../middlewares/Validations';

const matchesRoute = Router();
const matchesController = new MatchesController();

matchesRoute.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));

matchesRoute.patch(
  '/:id/finish',
  TokenValidation.validateToken,
  (req: Request, res: Response) => matchesController.finishById(req, res),
);

matchesRoute.patch(
  '/:id',
  TokenValidation.validateToken,
  (req: Request, res: Response) => matchesController.updateMatch(req, res),
);

matchesRoute.post(
  '/',
  TokenValidation.validateToken,
  Validations.validateMatche,
  (req: Request, res: Response) => matchesController.createMatch(req, res),
);

export default matchesRoute;
