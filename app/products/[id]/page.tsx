interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return {
    // injetado no head do html para melhorar SEO
    title: product.title,
    description: product.description, // <meta name="description">
  };
}

export const revalidate = 60; // ISR: revalida a cada 60s

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="font-bold text-gray-600 text-2xl mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-600 text-lg font-semibold">${product.price}</p>
    </div>
  );
}
