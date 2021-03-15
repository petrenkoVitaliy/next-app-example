import { NextApiRequest, NextApiResponse } from 'next';
import { getCategoriesController } from '@server/controllers/categories';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getCategoriesController(req, res);
};

export default handler;
