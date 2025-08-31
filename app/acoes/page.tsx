import Atualizar from "@/components/atualizar";

export default async function Acoes() {
    const response = await fetch('https://api.origamid.online/acoes/lua', {
        next: {
            revalidate: 5
        }
    });
    const acao = await response.json() as {simbolo: string; atualizada: string };

    return(
        <main>
            <p>{acao.simbolo}</p>
            <p>{acao.atualizada}</p>
            <Atualizar />
        </main>
    )
}