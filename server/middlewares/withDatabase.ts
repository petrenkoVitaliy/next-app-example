import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize } from 'sequelize';
import { config } from '../../config';

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
  handler: (db: Sequelize, req: NextApiRequest, res: NextApiResponse<T>) => void,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await getSequelizeConnection();

    await handler(db, req, res);

    db.close().then(() => {
      console.log('--DB close');
    });

    return;
  };
};
