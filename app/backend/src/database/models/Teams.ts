import {
  CreationOptional, DataTypes, InferAttributes,
  InferCreationAttributes, Model,
} from 'sequelize';

import db from '.';
// import OtherModel from './OtherModel';

class Team extends Model<InferAttributes<Team>,
InferCreationAttributes<Team>> {
  declare id: CreationOptional<number>; // declara e tipa o id, mas como um parametro opcional
  declare teamName: string; // declara e tipa teamName como string
}

// Inicializa o modelo Team com os campos 'id' e 'teamName'
Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  // Configurações do model
  {
    sequelize: db,
    modelName: 'team',
    timestamps: false,
    underscored: true, // Usa snake_case para os nomes das colunas no banco de dados
  },
);

export default Team;
