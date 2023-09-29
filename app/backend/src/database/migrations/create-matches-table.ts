import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IMatche } from '../../Interfaces/matches/IMatche';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMatche>>('matches', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      homeTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'home_team_id',
        // references: {
        //   model: 'teams',
        //   key: 'id',
        // },
      },
      homeTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'home_team_goals',
      },
      awayTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'away_team_id',
        // references: {
        //   model: 'teams',
        //   key: 'id',
        // },
      },
      awayTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'away_team_goals',
      },
      inProgress: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'in_progress',
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('matches');
  },
};