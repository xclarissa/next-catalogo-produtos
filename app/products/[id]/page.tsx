// import type { Metadata } from "next";

// type Props = {
//   params: Promise<{ id: string }>;
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = await params;
//   const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
//     res.json()
//   );

//   return {
//     // injetado no head do html para melhorar SEO
//     title: product.title,
//     description: product.description, // <meta name="description">
//   };
// }

// export default function Page({ params }: Props) {}

// export const revalidate = 60; // ISR: revalida a cada 60s

// export async function ProductDetail({ params }: Props) {
//   const { id } = await params;
//   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const product = await response.json();

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
//       <h1 className="font-bold text-gray-600 text-2xl mb-4">{product.title}</h1>
//       <p className="text-gray-700 mb-2">{product.description}</p>
//       <p className="text-gray-600 text-lg font-semibold">${product.price}</p>
//     </div>
//   );
// }

export type ProductParams = {
  params: {
    id: string;
  };
};

type Products = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 1 | 0;
};

export default async function ProductPage({ params }: ProductParams) {
  const { id } = await params;
  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const product = (await response.json()) as Products;

  return (
    <main>
      <h1>Detalhe do produto</h1>
      <h3>{product.nome}</h3>
      <p>{product.descricao}</p>
      <p>R${product.preco}</p>
    </main>
  );
}
