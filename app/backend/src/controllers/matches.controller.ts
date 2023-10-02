import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatcheService from '../services/matches.service';

export default class MatchesController {
  constructor(
    private matcheService = new MatcheService(),
  ) { }

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    let response;
    console.log(Boolean(inProgress));

    // switch (inProgress) {
    //   case true:
    //     response = await this.matcheService.inProgress(true);
    //     break;

    //   case false:
    //     response = await this.matcheService.inProgress(false);
    //     break;

    //   default:
    //     response = await this.matcheService.findAll();
    //     break;
    // }
    // const { status, data } = response;
    // return res.status(mapStatusHTTP(status)).json(data);

    if (inProgress == null || inProgress === '') {
      response = await this.matcheService.findAll();
    } else {
      response = await this.matcheService.inProgress(inProgress === 'true');
    }
    const { status, data } = response;
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async finishById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matcheService.finishById(Number(id));
    res.status(mapStatusHTTP(status)).json(data);
  }
}
