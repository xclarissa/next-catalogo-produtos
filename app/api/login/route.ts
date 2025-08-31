import { cookies } from "next/headers";
import { NextRequest } from "next/server";

type Login = {
  username: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Login;
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: body.username,
      password: body.password,
    }),
  });

  if (!response.ok) {
    return Response.json({ erro: "Dados incorretos!" }, { status: 401 });
  }

  const data = await response.json();
  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  return Response.json({ autorizado: true });
}
