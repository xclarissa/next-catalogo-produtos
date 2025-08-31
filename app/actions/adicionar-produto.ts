"use server"

import { revalidatePath } from "next/cache";
import { Produto } from "../produtos/page";
import { redirect } from "next/navigation";

export default async function addProduct(produto: Produto) {
    try {
        const response = await fetch("https://api.origamid.online/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        });
        await response.json();
        revalidatePath("/produtos")
        redirect("/produtos")
    } catch (error) {
        return false;
    }
}
