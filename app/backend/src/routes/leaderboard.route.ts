import { Router, Request, Response } from 'express';
import LeaderBoardController from '../controllers/leaderBoard.controller';
// import TokenValidation from '../middlewares/Token.validation';
// import Validations from '../middlewares/Validations';

const leaderRoute = Router();
const leaderController = new LeaderBoardController();

leaderRoute.get(
  '/home',
  (req: Request, res: Response) => leaderController.getLeaderBoard(req, res),
);

export default leaderRoute;
