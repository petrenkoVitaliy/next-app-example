import { NextApiRequest, NextApiResponse } from 'next';
import { getItemsByCategoryProvider } from '@server/controllers/items';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getItemsByCategoryProvider.controller(req, res);
};

export default handler;
