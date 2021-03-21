import { NextApiRequest, NextApiResponse } from 'next';

import { ControllerBag } from '@server/interfaces/middleware.interface';
import { checkConnection, getSequelizeConnection } from '@server/db';
import { Logger } from '@server/utils/logger';

export const withDatabase = async (
  req: NextApiRequest,
  res: NextApiResponse,
  bag: ControllerBag,
  next: (bag: ControllerBag) => Promise<void>,
) => {
  Logger.status('withDatabase middleware');
  const dbMap = getSequelizeConnection();

  await checkConnection(dbMap.sequelize);

  await next({ ...bag, db: dbMap });

  // TODO:
  // await dbMap.sequelize.close();
  // Logger.status('--> DB close');
};
