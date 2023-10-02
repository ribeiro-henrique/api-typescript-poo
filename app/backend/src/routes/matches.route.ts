import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = Router();
const matchesController = new MatchesController();

matchesRoute.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));

export default matchesRoute;
