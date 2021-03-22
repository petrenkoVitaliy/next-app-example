import { withDatabase } from '@server/middlewares/withDatabase';
import { withMiddlewares } from '@server/middlewares';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { Logger } from '@server/utils/logger';
import { ItemModel } from 'models/item';

const middlewares = [withRequestLog, withDatabase];

export const getItemsByCategory = withMiddlewares<ItemModel[]>(middlewares)(
  async (req, res, controllerBag) => {
    if (!controllerBag.db) {
      throw new Error();
    }

    const { db } = controllerBag;

    const categoryName = req.query.category as string;
    const category = await db.CategoryModel.findOne({ where: { name: categoryName } });

    const sections = category
      ? await db.ItemModel.findAll({
          where: { CategoryId: category.id },
        })
      : [];

    res.status(200).json(sections);
  },
);
