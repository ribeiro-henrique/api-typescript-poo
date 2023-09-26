import { ITeam } from './ITeam';

export interface ITeamModel {
  findAll(): Promise<ITeam[]>;
  findById(id: ITeam['id']): Promise<ITeam | null>
}

// essa interface é para o retorno da model,
// a anterior era exclusiva para o sequelize
// não confundir xD
