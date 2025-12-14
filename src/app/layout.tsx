import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
// Importamos o nosso novo componente de cabeçalho
import { Header } from "@/components/layout/header";

const fontSerif = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariana Bueno | Advocacia de Excelência",
  description: "Soluções jurídicas modernas e especializadas em Direito Civil, Família e Trabalhista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontSerif.variable} ${fontSans.variable}`}>
      {/* Adicionamos uma classe flex para o rodapé ficar sempre no final */}
      <body className="flex flex-col min-h-screen">
        {/* O Header vai aparecer no topo de todas as páginas */}
        <Header />
        
        {/* O conteúdo específico de cada página (o "children") vai ser renderizado aqui */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Aqui virá o Footer (Rodapé) no futuro */}
      </body>
    </html>
  );
}