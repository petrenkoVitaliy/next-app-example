import { DatabaseMap } from 'models';
import { NextApiRequest, NextApiResponse } from 'next';

type ControllerSimple<T = undefined> = (
  req: NextApiRequest,
  res: NextApiResponse<T>,
) => Promise<void>;

type ControllerWithBag<T = undefined> = (
  req: NextApiRequest,
  res: NextApiResponse<T>,
  bag: ControllerBag,
) => Promise<void>;

export type Controller<T = string, WithMiddlewares = false> = WithMiddlewares extends true
  ? ControllerWithBag<T>
  : ControllerSimple<T>;

export type NextFunction = (bag: ControllerBag) => Promise<void>;

export type Middleware = <T = undefined>(
  req: NextApiRequest,
  res: NextApiResponse<T>,
  bag: ControllerBag,
  next: NextFunction,
) => Promise<void>;

export interface ControllerBag {
  db: DatabaseMap | undefined;
}
