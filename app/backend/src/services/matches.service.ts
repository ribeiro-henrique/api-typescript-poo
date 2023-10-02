import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeam.model';
import TeamModel from '../models/teams.model';
import { ServiceResponse } from '../Interfaces/Service.response';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async findById(id: number): Promise<ServiceResponse<ITeam>> {
    const idTeam = await await this.teamModel.findById(id);
    if (!idTeam) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

    return { status: 'SUCCESSFUL', data: idTeam };
  }
}
