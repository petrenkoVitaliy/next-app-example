import { NextApiRequest } from 'next';

import { Logger } from '@server/utils/logger';
import { ControllerBag } from '@server/interfaces/controllerBag.interface';
import { NextFunction } from '@server/interfaces/middleware.interface';

export const withRequestLog = async <T>(
  next: NextFunction<T>,
  bag: ControllerBag,
  req?: NextApiRequest,
) => {
  if (req) {
    Logger.route(req.url);
  }
  return await next({ ...bag });
};
