import { CategoryModel } from 'models/category';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { getCategoriesService } from '@server/services/categories';
import { generateProvider } from '@server/utils/provider';

export const getCategoriesProvider = generateProvider<CategoryModel[]>(
  getCategoriesService,
  [withRequestLog, withDatabase],
  undefined,
);
