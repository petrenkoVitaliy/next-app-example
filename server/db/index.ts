import { Sequelize } from 'sequelize';
import { config } from '@config/index';

import { addModelDefiners, DatabaseMap } from 'models';
import { Logger } from '@server/utils/logger';

let sequelize: DatabaseMap | undefined = undefined;
export const getSequelizeConnection = () => {
  if (!sequelize) {
    Logger.event('DB connecting...');
    sequelize = generateSequelizeConnection();
  }

  return sequelize;
};

export const checkConnection = async (sequelize: Sequelize) => {
  await sequelize
    .authenticate({ logging: false })
    .then(() => {
      Logger.event('DB success connect');
    })
    .catch((err) => {
      Logger.error('Unable to connect to the database:', err);
    });
};

const generateSequelizeConnection = (): DatabaseMap => {
  const sequelize = new Sequelize(
    config.database.database,
    config.database.user,
    config.database.password,
    {
      host: config.database.host,
      dialect: 'mysql',
      pool: {
        max: 5, // TODO: not sure here
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      // logging: false,
    },
  );

  const DatabaseMap = addModelDefiners(sequelize);

  return DatabaseMap;
};
