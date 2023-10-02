import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatcheService from '../services/matches.service';

export default class MatchesController {
  constructor(
    private matcheService = new MatcheService(),
  ) { }

  public async findAll(_req: Request, res: Response) {
    const { status, data } = await this.matcheService.findAll();
    res.status(mapStatusHTTP(status)).json(data);
  }
}
