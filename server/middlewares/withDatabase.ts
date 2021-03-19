import { NextApiRequest, NextApiResponse } from 'next';

import { ControllerBag } from '@server/interfaces/middleware.interface';
import { checkConnection, getSequelizeConnection } from 'models';

export const withDatabase = async (
  req: NextApiRequest,
  res: NextApiResponse,
  bag: ControllerBag,
  next: (bag: ControllerBag) => Promise<void>,
) => {
  console.log('::withDatabase middleware');
  const db = getSequelizeConnection();

  await checkConnection(db);

  await next({ ...bag, db });

  await db.close();
  console.log('--> DB close');
};
