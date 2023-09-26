import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeam.model';
import Team from '../database/models/Teams';

export default class TeamModel implements ITeamModel {
  private model = Team;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) { return null; }
    return dbData.toJSON();
  }
}

// conteúdo conforme sessão 10 xD
