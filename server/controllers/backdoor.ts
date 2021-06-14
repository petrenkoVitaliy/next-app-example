import { withDatabase } from '@server/middlewares/withDatabase';
import { withRequestLog } from '@server/middlewares/withRequestLog';
import { getImagesTest } from '@server/services/backdoor';
import { Logger } from '@server/utils/logger';
import { generateProvider } from '@server/utils/provider';

export const getBackdoorProvider = generateProvider<any>(
  getImagesTest,
  [withRequestLog, withDatabase],
  undefined,
);
