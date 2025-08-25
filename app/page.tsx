import { Product } from "@/types/Product";
import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow bg-white hover:shadow-lg transition"
        >
          <h2 className="font-bold text-gray-600">{product.title}</h2>
          <Image className="mx-auto block" src={product.image} alt="Foto do produto" width={250} height={400} />
          <p className="text-sm text-gray-600">${product.price}</p>
          <a
            href={`/products/${product.id}`}
            className="text-blue-600 hover:underline text-sm"
          >
            Ver detalhes
          </a>
        </div>
      ))}
    </div>
  );
}
