import { NextApiRequest, NextApiResponse } from 'next';
import { getBackdoorProvider } from '@server/controllers/backdoor';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return getBackdoorProvider.controller(req, res);
};

export default handler;
