import { Category } from '@src/interfaces/models/category.interface';
import { Controller } from '@server/interfaces/middleware.interface';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withMiddlewares } from '@server/middlewares';

import { sampleData } from '@src/utils/sample-data';

const middlewares = [withDatabase];

export const getCategoriesController = withMiddlewares<Category[]>(middlewares)(
  async (req, res, bag) => {
    console.log(!!bag.db);
    res.status(200).json(sampleData);
  },
);

// Unused. Just for example - controller without middleware
export const getCategoriesSimpleController: Controller<Category[]> = async (req, res) => {
  res.status(200).json(sampleData);
};
