import { CategoryModel } from 'models/category';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { withMiddlewares } from '@server/middlewares';
// import { Logger } from '@server/utils/logger';

const middlewares = [withRequestLog, withDatabase];

export const getCategoriesController = withMiddlewares<CategoryModel[]>(middlewares)(
  async (req, res, controllerBag) => {
    if (!controllerBag.db) {
      throw new Error();
    }
    const { db } = controllerBag;

    const categories = await db.CategoryModel.findAll({});

    res.status(200).json(categories);
  },
);

// Unused. Just for example - controller without middleware
// export const getCategoriesControllerTMP: Controller = async (req, res) => {
//   // const result = await getAllCategories();

//   res.status(200).json(JSON.stringify({}));
// };
