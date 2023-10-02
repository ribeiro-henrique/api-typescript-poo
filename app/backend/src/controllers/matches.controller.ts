import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import TeamService from '../services/teams.service';

export default class matchesController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async findAll(_req: Request, res: Response) {
    const { status, data } = await this.teamService.findAll();
    res.status(mapStatusHTTP(status)).json(data);
  }
}
