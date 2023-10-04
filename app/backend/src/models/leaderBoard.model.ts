import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderBoard';
import { ILeaderBoardModel } from '../Interfaces/leaderboard/ILeaderBoard.model';

import Leaderboard from '../database/models/LeaderBoard';

export default class LeaderBoardModel implements ILeaderBoardModel {
  private model = Leaderboard;
  private query = `SELECT
  T.team_name AS name,
  SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 3 
           WHEN M.home_team_goals = M.away_team_goals THEN 1 
           ELSE 0 END) AS totalPoints,
  COUNT(*) AS totalGames,
  SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
  SUM(CASE WHEN M.home_team_goals = M.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
  SUM(CASE WHEN M.home_team_goals < M.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
  SUM(M.home_team_goals) AS goalsFavor,
  SUM(M.away_team_goals) AS goalsOwn,
  SUM(M.home_team_goals) - SUM(M.away_team_goals) AS goalsBalance,
  ROUND(
    (SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 3 
            WHEN M.home_team_goals = M.away_team_goals THEN 1 
            ELSE 0 END) / (COUNT(*) * 3)) * 100, 2
  ) AS efficiency
FROM matches AS M
INNER JOIN teams AS T ON M.home_team_id = T.id
WHERE M.in_progress = false
GROUP BY T.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC;
`;

  async getLeaderBoard(): Promise<ILeaderboard[]> {
    const result = await this.model.sequelize?.query(this.query);

    if (!result || !Array.isArray(result[0]) || result[0].length === 0) {
      throw new Error('Nenhum dado de leaderboard encontrado.');
    }

    const leaderboardData = result[0]; // Pega o primeiro item do array
    console.log(leaderboardData);

    return leaderboardData as ILeaderboard[];
  }
}
