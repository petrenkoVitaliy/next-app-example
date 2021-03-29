import { NextApiRequest, NextApiResponse } from 'next';
import { getSectionsProvider } from '@server/controllers/sections';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getSectionsProvider.controller(req, res);
};

export default handler;
