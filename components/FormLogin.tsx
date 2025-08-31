"use client";

import { FormEvent, useState } from "react";

type Login = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const [login, setLogin] = useState<Login>({
    username: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.username,
        password: login.password,
      }),
    });

    if (response.ok) window.location.href = "/";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between w-full h-full p-14 gap-6"
    >
      <div className="flex flex-col">
        <label htmlFor="username" className="text-blue-950 font-semibold mb-2">
          Usuário:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={login.username}
          onChange={handleChange}
          className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-blue-950 font-semibold mb-2">
          Senha:
        </label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition"
        >
          Entrar
        </button>
      </div>
    </form>
  );
}
