"use client";

import React, { FormEvent } from "react";
import { Produto } from "../page";
import addProduct from "@/app/actions/adicionar-produto";

export default function AdicionarPage() {
    async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        const data: Produto = {
            nome: ev.currentTarget.nome.value,
            descricao: ev.currentTarget.descricao.value,
            preco: Number(ev.currentTarget.preco.value),
            estoque: Number(ev.currentTarget.estoque.value),
            importado: ev.currentTarget.importado.checked ? 1 : 0,
        }
        await addProduct(data);
        console.log(data)
    }

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="w-96 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between w-full h-full p-14 gap-6"
                >
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-blue-950 font-semibold mb-2">
                        Nome do produto:
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome" 
                        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="descricao" className="text-blue-950 font-semibold mb-2">
                        Descrição:
                    </label>
                    <input
                        type="text"
                        id="descricao"
                        name="descricao"
                        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="preco" className="text-blue-950 font-semibold mb-2">
                        Preço:
                    </label>
                    <input
                        type="text"
                        id="preco"
                        name="preco" 
                        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="estoque" className="text-blue-950 font-semibold mb-2">
                        Estoque:
                    </label>
                    <input
                        type="text"
                        id="estoque"
                        name="estoque"
                        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
                    />
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        id="importado"
                        name="importado"
                        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900"
                    />
                    <label htmlFor="importado" className="text-blue-950 font-semibold mb-2">
                        Importado:
                    </label>
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
            </div>
        </main>
    );
}
