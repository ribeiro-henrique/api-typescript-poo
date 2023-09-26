import { Router, Request, Response } from 'express';
import TeamController from '../controllers/teams.controller';

const teamController = new TeamController();
const teamsRoute = Router();

teamsRoute.get('/', (req: Request, res: Response) => teamController.findAll(req, res));

export default teamsRoute;
