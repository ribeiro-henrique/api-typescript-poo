import { IMatcheModel } from '../Interfaces/matches/IMatche.model';
import { IMatche } from '../Interfaces/matches/IMatche';

import MatcheModel from '../models/matches.model';
import { ServiceResponse } from '../Interfaces/Service.response';

export default class MatcheService {
  constructor(
    private matcheModel: IMatcheModel = new MatcheModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<IMatche[]>> {
    const allTeams = await this.matcheModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }
}
