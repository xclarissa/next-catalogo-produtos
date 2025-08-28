"use client"

import { useEffect, useState } from "react";

type Products = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 1 | 0;
};

export default function ClientFetch() {
  const [products, setProducts] = useState<Products[]>([]);

  async function fetchProducts() {
    const response = await fetch("https://api.origamid.online/produtos");
    const data: Products[] = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.nome}</h3>
          <p>{product.descricao}</p>
        </div>
      ))}
    </div>
  );
}
