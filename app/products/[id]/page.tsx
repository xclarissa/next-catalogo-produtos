import { title } from "process";

interface ProductDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();

  return {
    // injetado no head do html para melhorar SEO
    title: product.title, 
    description: product.description,  // <meta name="description">
  };
}

export const revalidate = 60; // ISR: revalida a cada 60s

export default async function ProductDetail({ params }: ProductDetailProps) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1>{product}</h1>
    </div>
  );
}
