import { IMatcheModel } from '../Interfaces/matches/IMatche.model';
import { IMatche } from '../Interfaces/matches/IMatche';
import { ITeamModel } from '../Interfaces/teams/ITeam.model';
import TeamModel from '../models/teams.model';
import MatcheModel from '../models/matches.model';
import { ServiceResponse } from '../Interfaces/Service.response';

export default class MatcheService {
  constructor(
    private matcheModel: IMatcheModel = new MatcheModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<IMatche[]>> {
    const allMatches = await this.matcheModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async inProgress(inProgress: boolean): Promise<ServiceResponse<IMatche[]>> {
    const matchesInProgress = await this.matcheModel.inProgress(inProgress);
    return { status: 'SUCCESSFUL', data: matchesInProgress };
  }

  public async finishById(id: number): Promise<ServiceResponse<string>> {
    const updatedMatches = await this.matcheModel.finishById(id);

    if (updatedMatches === 0) {
      return { status: 'SUCCESSFUL', data: 'Deu ruim' };
    }
    return { status: 'SUCCESSFUL', data: 'Finished' };
  }

  public async updateMatch(
    id: number,
    matche: { homeTeamGoals: number; awayTeamGoals: number },
  ): Promise<ServiceResponse<string>> {
    const updatedMatches = await this.matcheModel.updateMatch(id, matche);

    if (updatedMatches === 0) {
      return { status: 'SUCCESSFUL', data: 'Deu ruim' };
    }
    return { status: 'SUCCESSFUL', data: 'Atualizado' };
  }

  public async createMatch(matchData: {
    homeTeamId: number;
    awayTeamId: number;
    homeTeamGoals: number;
    awayTeamGoals: number;
  }): Promise<ServiceResponse<IMatche | null>> {
    const homeTeam = await this.teamModel.findById(matchData.homeTeamId);
    const awayTeam = await this.teamModel.findById(matchData.awayTeamId);

    if (!homeTeam || !awayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }

    const matchesCreated = await this.matcheModel.createMatch(matchData);
    return { status: 'CREATED', data: matchesCreated };
  }
}
