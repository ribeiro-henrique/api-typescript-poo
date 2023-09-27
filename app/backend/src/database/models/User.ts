import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import db from '.';
// import OtherModel from './OtherModel';

class User extends Model<InferAttributes<User>,
InferCreationAttributes<User>> {
  declare id: CreationOptional<number>; // declara e tipa o id, mas como um parametro opcional
  declare username: string; // declara e tipa teamName como string
  declare role: string;
  declare email: string;
  declare password: string;
}

// Inicializa o modelo Team com os campos 'id' e 'teamName'
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // Configurações do model
  {
    sequelize: db,
    modelName: 'user',
    timestamps: false,
  },
);

export default User;
