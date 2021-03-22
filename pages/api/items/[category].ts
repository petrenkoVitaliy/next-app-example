import { NextApiRequest, NextApiResponse } from 'next';
import { getItemsByCategory } from '@server/controllers/items';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getItemsByCategory(req, res);
};

export default handler;
