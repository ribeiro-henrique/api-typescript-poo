import { IMatche } from './IMatche';

export interface IMatcheModel {
  findAll(): Promise<IMatche[]>;
  inProgress(inProgress: boolean): Promise<IMatche[]>;
}

// essa interface é para o retorno da model,
// a anterior era exclusiva para o sequelize
// não confundir xD
