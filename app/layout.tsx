import Link from "next/link";
import "./globals.css";
import Menu from "@/components/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white font-bold">
          Catálogo de Produtos
        </header> 

        <main className="p-6">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
          © 2025 - Meu Catálogo
        </footer>
      </body>
    </html>
  );
}
