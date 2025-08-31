"use client";

import { revalidatePathAction } from "@/app/actions/revalidate-path";

export default function Atualizar() {
  function handleClick() {
    revalidatePathAction("/acoes");
  }
  
  return <button onClick={handleClick} className="text-purple-600 bg-white px-6 py-4 rounded-md cursor-pointer">Atualizar</button>;
}
