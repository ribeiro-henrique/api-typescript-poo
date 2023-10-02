import { IMatche } from './IMatche';

export interface IMatcheModel {
  findAll(): Promise<IMatche[]>;
  inProgress(inProgress: boolean): Promise<IMatche[]>;
  finishById(id: number): Promise<number>;
}

// essa interface é para o retorno da model,
// a anterior era exclusiva para o sequelize
// não confundir xD
