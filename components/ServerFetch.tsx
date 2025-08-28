type Products = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 1 | 0;
};

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos");
  const data: Products[] = await response.json();
  console.log("data", data);

  return <div>
    {data.map(product => (
        <ul key={product.id}>
            <li>{product.nome}</li>
        </ul>
    ))}
  </div>;
}
