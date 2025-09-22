export const runtime = 'nodejs'; // <-- required, Sequelize won’t run on Edge
import mysql2 from 'mysql2';
import { DataTypes, Model, Sequelize, Transaction } from 'sequelize';
import 'server-only';

const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USERNAME || '',
  process.env.DB_PASSWORD || undefined,
  {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
export { DataTypes, Model, Transaction };
