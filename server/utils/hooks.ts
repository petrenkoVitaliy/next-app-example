import { NextApiRequest, NextApiResponse } from 'next';
import {
  Controller,
  GetterController,
  Middleware,
  NextFunction,
} from '@server/interfaces/middleware.interface';
import { ControllerBag } from '@server/interfaces/controllerBag.interface';

export const withMiddlewares =
  <T = undefined>(middlewares: Middleware[]) =>
  (controller: Controller<T>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const initialBag: ControllerBag = { db: undefined };

    let nextFn: NextFunction = (bag) => controller(req, res, bag);

    [...middlewares].reverse().forEach((middleware) => {
      const prevNextFn = nextFn;
      nextFn = (bag) => middleware(prevNextFn, bag, req, res);
    });

    return nextFn(initialBag);
  };

export const withHooks =
  <T = undefined, M = undefined>(middlewares: Middleware[]) =>
  (getter: GetterController<T, M>) =>
  async (params: M) => {
    const initialBag: ControllerBag = { db: undefined };

    let nextFn: NextFunction<T> = (bag) => getter(bag, params);

    [...middlewares].reverse().forEach((middleware) => {
      const prevNextFn = nextFn;
      nextFn = (bag) => middleware<T>(prevNextFn, bag);
    });

    return nextFn(initialBag);
  };
