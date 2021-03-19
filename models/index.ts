import { Sequelize } from 'sequelize';

import { config } from '@config/index';

// let sequelize: Sequelize | undefined = undefined;
export const getSequelizeConnection = () => {
  // if (!sequelize) {
  //   sequelize = generateSequelizeConnection();
  // }

  // TODO: Singleton should be rechecked...

  return generateSequelizeConnection();
};

export const checkConnection = async (sequelize: Sequelize) => {
  await sequelize
    .authenticate({ logging: false })
    .then(() => {
      console.log('--> DB success connect');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

const generateSequelizeConnection = (): Sequelize => {
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
    },
  );

  return sequelize;
};
