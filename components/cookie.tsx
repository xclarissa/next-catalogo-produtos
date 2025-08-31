"use client"

import { getCookie } from "@/app/actions/get-cookie";
import { useState } from "react";

export default function Cookie() {
  const [token, setToken] = useState("");
  
  async function handleClick() {
    const token = await getCookie("token");
    if (token) setToken(token);
  }

  return (
    <div>
      <h2>Cookie</h2>
      <button onClick={handleClick}>Pegar cookie</button>
      {token}
    </div>
  );
}
