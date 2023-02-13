// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

const accessToken = process.env.MP_ACCESS_TOKEN!;
const integratorId = process.env.NEXT_PUBLIC_MP_INTEGRATOR_ID!;

mercadopago.configure({
  access_token: accessToken,
  integrator_id: integratorId,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, description, picture_url, quantity, unit_price } =
    req.body;

  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          id,
          title,
          description,
          picture_url,
          quantity,
          unit_price,
        },
      ],
      payer: {
        phone: {
          area_code: '11',
          number: 123456789,
        },
        address: {
          zip_code: '65062-100',
          street_name: 'Falsa',
          street_number: 123,
        },
        email: 'test_user_33467020@testuser.com',
        name: 'Lalo',
        surname: 'Landa',
      },
      back_urls: {
        success: `${req.headers.origin}/api/feedback`,
        failure: `${req.headers.origin}/api/feedback`,
        pending: `${req.headers.origin}/api/feedback`,
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'amex',
          },
        ],
        excluded_payment_types: [
          {
            id: 'atm',
          },
        ],
        installments: 6,
      },
      external_reference: 'jo0102009@hotmail.com',
      notification_url: `${req.headers.origin}/api/webhook`,
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({
      id: response.body.id,
      init_point: response.body.init_point,
    });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
