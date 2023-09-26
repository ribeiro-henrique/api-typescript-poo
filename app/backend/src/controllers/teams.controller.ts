import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import TeamService from '../services/teams.service';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async findAll(_req: Request, res: Response) {
    const { status, data } = await this.teamService.findAll();
    res.status(mapStatusHTTP(status)).json(data);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.teamService.findById(Number(id));
    res.status(mapStatusHTTP(status)).json(data);
  }
}
