"use server";
import { cookies } from "next/headers";

export default async function Login(username: string, password: string) {
  try {
    const response = await fetch("https://api.origamid.online/conta/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
    });

    console.log(data);
    return true;
  } catch (error) {
    return false;
  }
}
