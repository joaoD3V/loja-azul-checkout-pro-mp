// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Webhook: ', req.body);
  res.status(200).json({ req: req.body });
};

export default handler;
