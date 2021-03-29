import { NextFunction } from '@server/interfaces/middleware.interface';
import { checkConnection, getSequelizeConnection } from '@server/db';
import { Logger } from '@server/utils/logger';
import { ControllerBag } from '@server/interfaces/controllerBag.interface';

export const withDatabase = async <T>(next: NextFunction<T>, bag: ControllerBag) => {
  const dbMap = getSequelizeConnection();

  await checkConnection(dbMap.sequelize);

  return await next({ ...bag, db: dbMap });

  // TODO:
  // await dbMap.sequelize.close();
  // Logger.status('--> DB close');
};
