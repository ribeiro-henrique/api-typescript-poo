import { IMatche } from './IMatche';

export interface IMatcheModel {
  findAll(): Promise<IMatche[]>;
  // findById(id: ITeam['id']): Promise<ITeam | null>
}

// essa interface é para o retorno da model,
// a anterior era exclusiva para o sequelize
// não confundir xD
