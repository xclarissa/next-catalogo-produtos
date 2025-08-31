import { cookies } from "next/headers";

export default async function GET() {
  const token = (await cookies()).get('token')?.value;
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.ok ? await response.json() : null;
  return Response.json(data);
}
