import { NextApiRequest, NextApiResponse } from 'next';
import { getSectionsController } from '@server/controllers/sections';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getSectionsController(req, res);
};

export default handler;
