import { NextApiRequest, NextApiResponse } from 'next';
import { Category } from '@src/interfaces/models/category.interface';
import { sampleData } from '@src/utils/sample-data';
import { withDatabase } from '@server/middlewares/withDatabase';
import { ControllerBag } from '@server/interfaces/middleware.interface';

export const getCategoriesController = withDatabase(
  (req: NextApiRequest, res: NextApiResponse<Category[]>, bag: ControllerBag) => {
    res.status(200).json(sampleData);
    console.log(!!bag.db);
  },
);
