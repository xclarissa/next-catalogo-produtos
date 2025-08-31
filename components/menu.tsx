import { cookies } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    usuario: "",
  };

  const token = (await cookies()).get("token")?.value;
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    conta = (await response.json()) as Conta;
  }
  console.log(response);

  return (
    <ul className="flex gap-4 text-2xl">
      <li>
        <Link href="/" className="decoration-blue-500 hover:text-blue-500">
          Home
        </Link>
      </li>
      <li>{conta.autorizado ? conta.usuario : <Link href="/login">Login</Link>}</li>
      {/* <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li> */}
    </ul>
  );
}
