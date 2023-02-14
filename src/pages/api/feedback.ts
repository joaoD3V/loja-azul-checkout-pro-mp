// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  const { payment_id, status, merchant_order_id, external_reference } =
    req.query;
  res.status(200).json({
    MerchantOrder: merchant_order_id!,
    ExternalReference: external_reference!,
    Payment: payment_id!,
    Status: status!,
  });
};

export default handler;
