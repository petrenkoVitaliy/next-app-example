import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize } from 'sequelize';

import { ControllerBag } from '@server/interfaces/middleware.interface';
import { config } from '@config/index';

const getSequelizeConnection = async (): Promise<Sequelize> => {
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

  // TODO: add node env dev check

  await sequelize
    .authenticate({ logging: false })
    .then(() => {
      console.log('--> DB success connect');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

  return sequelize;
};

export const withDatabase = async (
  req: NextApiRequest,
  res: NextApiResponse,
  bag: ControllerBag,
  next: (bag: ControllerBag) => Promise<void>,
) => {
  console.log('::withDatabase middleware');
  const db = await getSequelizeConnection();

  await next({ ...bag, db });

  await db.close();
  console.log('--> DB close');
};
