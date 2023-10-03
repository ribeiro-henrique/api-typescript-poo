import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matches.controller';
import TokenValidation from '../middlewares/Token.validation';

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

export default matchesRoute;
