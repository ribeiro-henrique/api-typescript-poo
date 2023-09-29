import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import db from '.';
// import OtherModel from './OtherModel';

class Matches extends Model<InferAttributes<Matches>,
InferCreationAttributes<Matches>> {
  declare id: CreationOptional<number>; // declara e tipa o id, mas como um parametro opcional
  declare homeTeamId: number; // declara e tipa teamName como string
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

// Inicializa o modelo Team com os campos 'id' e 'teamName'
Matches.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  // Configurações do model
  {
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
    underscored: true, // Usa snake_case para os nomes das colunas no banco de dados
  },
);

export default Matches;
