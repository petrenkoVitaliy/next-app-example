import { NextApiRequest, NextApiResponse } from 'next';
import { Category } from 'interfaces/models/category.interface';
import { sampleData } from 'utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse<Category[]>): void => {
  res.status(200).json(sampleData);
};

export default handler;
