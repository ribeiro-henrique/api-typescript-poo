import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderBoard';
import { ILeaderBoardModel } from '../Interfaces/leaderboard/ILeaderBoard.model';
import LeaderBoardModel from '../models/leaderBoard.model';
import { ServiceResponse } from '../Interfaces/Service.response';

export default class LeaderBoardService {
  constructor(
    private leaderModel: ILeaderBoardModel = new LeaderBoardModel(),
  ) {}

  public async getLeaderBoard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderBoard = await this.leaderModel.getLeaderBoard();
    return { status: 'SUCCESSFUL', data: leaderBoard };
  }
}
