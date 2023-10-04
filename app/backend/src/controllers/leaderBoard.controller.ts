import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import LeaderBoardService from '../services/leaderBoard.service';

export default class LeaderBoardController {
  constructor(
    private leaderService = new LeaderBoardService(),
  ) { }

  public async getLeaderBoard(_req: Request, res: Response) {
    const { status, data } = await this.leaderService.getLeaderBoard();
    res.status(mapStatusHTTP(status)).json(data);
  }
}
