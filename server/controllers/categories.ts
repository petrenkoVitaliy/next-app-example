import { Controller } from '@server/interfaces/middleware.interface';
import { getAllCategories } from '@server/services/categories';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withMiddlewares } from '@server/middlewares';

const middlewares = [withDatabase];

export const getCategoriesController = withMiddlewares<string>(middlewares)(
  async (req, res, controllerBag) => {
    if (!controllerBag.db) {
      throw new Error();
    }

    const result = await getAllCategories(controllerBag.db);

    res.status(200).json(JSON.stringify(result));
  },
);

// Unused. Just for example - controller without middleware
export const getCategoriesControllerTMP: Controller = async (req, res) => {
  // const result = await getAllCategories();

  res.status(200).json(JSON.stringify({}));
};
