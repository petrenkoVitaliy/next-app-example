import { NextApiRequest, NextApiResponse } from 'next';
import {
  Controller,
  ControllerBag,
  Middleware,
  NextFunction,
} from '@server/interfaces/middleware.interface';

export const withMiddlewares = <T = undefined>(hooks: Middleware[]) => (
  controller: Controller<T, true>,
) => async (req: NextApiRequest, res: NextApiResponse) => {
  const initialBag: ControllerBag = { db: undefined };

  let nextFn: NextFunction = (bag) => controller(req, res, bag);

  [...hooks].reverse().forEach((hook) => {
    const prevNextFn = nextFn;
    nextFn = (bag) => hook(req, res, bag, prevNextFn);
  });

  return nextFn(initialBag);
};
