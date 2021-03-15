import { NextApiRequest, NextApiResponse } from 'next';
import { Category } from 'interfaces/models/category.interface';
import { sampleData } from 'utils/sample-data';
import { withDatabase } from '@server/middlewares/withDatabase';
import { Sequelize } from 'sequelize/types';

export const getCategoriesController = withDatabase(
  (db: Sequelize, req: NextApiRequest, res: NextApiResponse<Category[]>) => {
    res.status(200).json(sampleData);
  },
);
