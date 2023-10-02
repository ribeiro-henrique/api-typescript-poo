import { IMatche } from '../Interfaces/matches/IMatche';
import { IMatcheModel } from '../Interfaces/matches/IMatche.model';
import Matches from '../database/models/Matches';
import Team from '../database/models/Teams';

export default class MatcheModel implements IMatcheModel {
  private model = Matches;

  async findAll(): Promise<IMatche[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async inProgress(inProgress: boolean): Promise<IMatche[]> {
    const dbData = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async finishById(id: number): Promise<number> {
    // Atualize o estado da partida para 'inProgress: false' no banco de dados.
    const [updatedRowsCount] = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );

    return updatedRowsCount;
  }
}

// conteúdo conforme sessão 10 xD
