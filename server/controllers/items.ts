import { withDatabase } from '@server/middlewares/withDatabase';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { getItemsByCategoryService } from '@server/services/items';
import { Logger } from '@server/utils/logger';
import { generateProvider } from '@server/utils/provider';
import { ItemModel } from 'models/item';
import { NextApiRequest } from 'next';

export const getItemsByCategoryProvider = generateProvider<ItemModel[], { categoryName: string }>(
  getItemsByCategoryService,
  [withRequestLog, withDatabase],
  (req: NextApiRequest) => {
    const categoryName = req.query.category as string;
    return { categoryName };
  },
);
