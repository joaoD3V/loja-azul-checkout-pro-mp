import { api } from '@/services/api';
import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import {} from 'mercadopago';

export type ProductProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type MPPreferente = {
  id: string;
  title: string;
  description: string;
  picture_url: string;
  quantity: number;
  unit_price: number;
};

export function Product({ id, name, description, image, price }: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  const finalPrice = price * quantity;

  async function handleMPPreferences(product: MPPreferente) {
    const { data } = await api.post<{ id: string; init_point: string }>(
      '/preferences',
      product
    );
    window.location.replace(data.init_point);
    console.log(data);
  }

  return (
    <div className="w-[230px] h-[380px] bg-white rounded flex flex-col items-center justify-start p-2">
      <img src={image} alt={`Imagem do produto ${name}`} />

      <div className="flex flex-col mt-4 items-center justify-center gap-1">
        <h3 className="text-xl">{name}</h3>
        <span className="font-semibold">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(finalPrice)}
        </span>
      </div>

      <div className="mt-4 w-full flex items-center justify-center">
        <span className="text-sm mr-2">Quantidade:</span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="border border-1 border-zinc-900 p-1 disabled:bg-zinc-200"
            onClick={() => setQuantity((prevValue) => prevValue - 1)}
            disabled={quantity === 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            className="border border-1 border-zinc-900 p-1 disabled:bg-zinc-200"
            onClick={() => setQuantity((prevValue) => prevValue + 1)}
            disabled={quantity === 10}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="mt-auto bg-zinc-900 text-zinc-50 w-full py-1 rounded"
        onClick={() =>
          handleMPPreferences({
            id,
            title: name,
            description,
            picture_url: image,
            quantity,
            unit_price: price,
          })
        }
      >
        Pague a compra
      </button>
    </div>
  );
}
