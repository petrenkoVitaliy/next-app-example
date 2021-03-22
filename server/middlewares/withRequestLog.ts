import { NextApiRequest, NextApiResponse } from 'next';

import { ControllerBag } from '@server/interfaces/middleware.interface';
import { Logger } from '@server/utils/logger';

export const withRequestLog = async (
  req: NextApiRequest,
  res: NextApiResponse,
  bag: ControllerBag,
  next: (bag: ControllerBag) => Promise<void>,
) => {
  Logger.route(req.url);
  return await next({ ...bag });
};
