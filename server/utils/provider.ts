import { NextApiRequest } from 'next';
import { Middleware } from '@server/interfaces/middleware.interface';
import { ControllerBag, FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { withHooks, withMiddlewares } from './hooks';

function generateProvider<
  ResponseType,
  ParamsType = undefined,
  IncomingParamsType = ParamsType extends undefined ? undefined : ParamsType
>(
  service: (bag: FilledControllerBag, params: IncomingParamsType) => Promise<ResponseType>,

  middlewares: Middleware[],
  paramsParser: ParamsType extends undefined
    ? undefined
    : (req: NextApiRequest) => IncomingParamsType,
) {
  const commonBagParser = (controllerBag: ControllerBag) => {
    if (!controllerBag.db) {
      throw new Error();
    }

    return controllerBag as FilledControllerBag;
  };

  const getter = withHooks<ResponseType, IncomingParamsType>(middlewares)(
    async (controllerBag, params) => {
      const parsedBag = commonBagParser(controllerBag);

      return await service(parsedBag, params);
    },
  );

  const controller = withMiddlewares<ResponseType>(middlewares)(async (req, res, controllerBag) => {
    const params = paramsParser ? paramsParser(req) : undefined;
    const parsedBag = commonBagParser(controllerBag);

    const result = await service(parsedBag, params as IncomingParamsType); // I ❤ TS

    res.status(200).json(result);
  });

  return { getter, controller };
}

export { generateProvider };
