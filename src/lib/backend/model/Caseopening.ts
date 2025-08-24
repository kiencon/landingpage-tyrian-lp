import sequelize, { DataTypes, Model } from './connection';

class CaseOpening extends Model {
  [x: string]: any;
}
CaseOpening.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    citizenid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goldcoin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    silvercoin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'caseopening',
    freezeTableName: true,
    timestamps: false,
  }
);

export default CaseOpening;
