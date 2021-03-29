import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBag } from './controllerBag.interface';

export type Controller<T = undefined> = (
  req: NextApiRequest,
  res: NextApiResponse<T>,
  bag: ControllerBag,
) => Promise<void>;

export type GetterController<T = undefined, M = undefined> = (
  bag: ControllerBag,
  params: M,
) => Promise<T>;

export type NextFunction<T = void> = (bag: ControllerBag) => Promise<T>;

export type Middleware = <T = undefined>(
  next: NextFunction<T>,
  bag: ControllerBag,
  req?: NextApiRequest,
  res?: NextApiResponse<T>,
) => Promise<T>;
