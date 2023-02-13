/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '@/components/Header';
import { Product, ProductProps } from '@/components/Product';
import { useEffect } from 'react';

const products: ProductProps[] = [
  {
    id: '1234',
    image: 'https://tiagomontes.me/wp-content/uploads/2022/11/image-7.png',
    name: 'iPhone 13 - 128GB',
    description:
      'iPhone 13 de 128 GB / Roxo / Tela de 6.1, Câmera Dupla 12MP + Selfie 12MP',
    price: 4124,
  },
  {
    id: '1235',
    image: 'https://tiagomontes.me/wp-content/uploads/2022/12/Group-7521.png',
    name: 'iPhone 13 Pro - 128GB',
    description:
      'Apple iPhone 13 Pro 128GB iOS 5G Wi-Fi Tela 6.1” Câmera Tripla 12MP + Sensor LiDAR – Grafite',
    price: 6686.72,
  },
  {
    id: '1236',
    image: 'https://tiagomontes.me/wp-content/uploads/2022/12/image-7-6.png',
    name: 'iPhone SE - 64GB',
    description:
      'Phone SE 3ª Geração Apple 64GB iOS 5G Wi-Fi Tela 4.7” Câmera Dupla 12MP – Meia-noite',
    price: 3427,
  },
  {
    id: '1237',
    image: 'https://tiagomontes.me/wp-content/uploads/2022/12/image-7-1-1.png',
    name: 'iPhone 12 - 256GB',
    description:
      'iPhone 12 Apple 256GB iOS 5G Wi-Fi Tela 6.1” Câmera 12MP – Roxo',
    price: 5857,
  },
];

export default function Home() {
  const appendSdkScript = () => {
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com/v2/security.js';
    script.setAttribute('view', 'home');
    document.body.append(script);
  };

  useEffect(() => {
    appendSdkScript();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full max-w-[1120px] mx-auto my-8 grid grid-cols-4 gap-12">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
