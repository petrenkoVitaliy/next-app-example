import { SectionModel } from 'database/models/section';

import { withDatabase } from '@server/middlewares/withDatabase';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { getSectionsService } from '@server/services/sections';
import { Logger } from '@server/utils/logger';
import { generateProvider } from '@server/utils/provider';

export const getSectionsProvider = generateProvider<SectionModel[]>(
  getSectionsService,
  [withRequestLog, withDatabase],
  undefined,
);
