// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackBody {
  Payment: string | string[];
  Status: string | string[];
  MerchantOrder: string | string[];
}

const handler = (req: NextApiRequest, res: NextApiResponse<FeedbackBody>) => {
  console.log(req.query);
  const { payment_id, status, merchant_order_id } = req.query;
  res.status(200).json({
    Payment: payment_id!,
    Status: status!,
    MerchantOrder: merchant_order_id!,
  });
};

export default handler;
