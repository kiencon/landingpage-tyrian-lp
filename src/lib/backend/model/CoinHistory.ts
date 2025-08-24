import sequelize, { DataTypes, Model } from './connection';

class CoinHistory extends Model {}
CoinHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    citizenid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discordId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'coinHistory',
    freezeTableName: true,
    timestamps: false,
  }
);

export default CoinHistory;
