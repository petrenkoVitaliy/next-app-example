import { SectionModel } from 'models/section';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withMiddlewares } from '@server/middlewares';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { Logger } from '@server/utils/logger';

const middlewares = [withRequestLog, withDatabase];

export const getSectionsController = withMiddlewares<SectionModel[]>(middlewares)(
  async (req, res, controllerBag) => {
    if (!controllerBag.db) {
      throw new Error();
    }

    const { db } = controllerBag;

    const sections = await db.SectionModel.findAll({
      include: db.CategoryModel,
    });

    // Logger.log(JSON.parse(JSON.stringify(sections)));
    Logger.log(sections.length);

    res.status(200).json(sections);
  },
);
