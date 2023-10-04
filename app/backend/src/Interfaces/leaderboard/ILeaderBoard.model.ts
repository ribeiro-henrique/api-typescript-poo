import { ILeaderboard } from './ILeaderBoard';

export interface ILeaderBoardModel {
  getLeaderBoard(): Promise<ILeaderboard[]>;
}

// essa interface é para o retorno da model,
// a anterior era exclusiva para o sequelize
// não confundir xD
