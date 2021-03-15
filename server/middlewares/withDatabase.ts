import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize } from 'sequelize';

import { ControllerBag } from '@server/interfaces/middleware.interface';
import { config } from '@config/index';

const getSequelizeConnection = async () => {
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
      console.log('--DB success');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

  return sequelize;
};

export const withDatabase = <T>(
  handler: (req: NextApiRequest, res: NextApiResponse<T>, bag: ControllerBag) => void,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await getSequelizeConnection();

    await handler(req, res, { db });

    db.close().then(() => {
      console.log('--DB close');
    });

    return;
  };
};
