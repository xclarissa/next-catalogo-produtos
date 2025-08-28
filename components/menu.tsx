import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
    </ul>
  );
}
