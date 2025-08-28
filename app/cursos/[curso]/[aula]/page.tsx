import { getAula } from "@/app/api/cursos";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageParams) {
  const { curso, aula } = await params;
  const aulaDetail = await getAula(curso, aula);

  return (
    <main>
      <Link href={`/cursos/${curso}`}>{curso}</Link>
      <h1>{aulaDetail.nome}</h1>
      <p>{aulaDetail.descricao}</p>
      <p>Tempo: {aulaDetail.tempo}</p>
    </main>
  );
}
