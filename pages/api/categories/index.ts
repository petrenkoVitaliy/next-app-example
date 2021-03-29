import { NextApiRequest, NextApiResponse } from 'next';
import { getCategoriesProvider } from '@server/controllers/categories';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getCategoriesProvider.controller(req, res);
};

export default handler;
