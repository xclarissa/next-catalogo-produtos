import { getCursos } from "@/app/api/cursos";
import Link from "next/link";

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1 className="text-4xl font-bold">Cursos</h1>
      {cursos.map((curso) => (
        <div key={curso.id}>
          <Link href={`/cursos/${curso.slug}`}>Nome: {curso.nome}</Link> 
        </div>
      ))}
    </main>
  );
}
