import { Controller } from '@server/interfaces/middleware.interface';
import { getAllCategories } from '@server/services/categories';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withMiddlewares } from '@server/middlewares';

const middlewares = [withDatabase];

// Unused. Just for example - controller without middleware
export const getCategoriesControllerTMP = withMiddlewares<string>(middlewares)(async (req, res) => {
  const result = await getAllCategories();

  res.status(200).json(JSON.stringify(result));
});

export const getCategoriesController: Controller = async (req, res) => {
  const result = await getAllCategories();

  res.status(200).json(JSON.stringify(result));
};
