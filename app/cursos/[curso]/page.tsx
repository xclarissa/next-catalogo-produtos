import { getCurso, getCursos } from "@/app/api/cursos";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  const { curso } = await params;
  const cursoDetail = await getCurso(curso);

  return (
    <main>
      <p>Descrição: {cursoDetail.descricao}</p>
      <p>Total Aulas: {cursoDetail.total_aulas}</p>
      <p>Total Horas: {cursoDetail.total_horas}</p>
      <br />
      <h2 className="text-2xl font-bold">Aulas</h2>
      <ul>
        {cursoDetail.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${cursoDetail.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
