import Link from "next/link";
// Importamos o componente de imagem otimizado do Next.js
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    // A seção ocupa 90% da altura da tela (h-[90vh]) e é relativa para posicionarmos a imagem de fundo
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* --- CAMADA 1: IMAGEM DE FUNDO --- */}
      <div className="absolute inset-0 z-0">
        {/* Lembre-se: você precisa ter uma imagem chamada 'hero-bg.jpg' na pasta public/images */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Escritório Mariana Bueno Advocacia"
          fill // Faz a imagem preencher todo o espaço
          className="object-cover opacity-30" // Opacidade baixa para ficar escura
          priority // Carrega essa imagem com prioridade máxima
        />
        {/* Um gradiente escuro por cima da imagem para o texto dourado brilhar mais */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />
      </div>

      {/* --- CAMADA 2: CONTEÚDO (TEXTO E BOTÃO) --- */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        
        {/* Título Principal */}
        <h1 className={cn("font-serif font-bold text-gold mb-6", "text-4xl md:text-6xl lg:text-7xl")}>
          Mariana Bueno
          {/* Subtítulo menor dentro do H1 */}
          <span className={cn("block font-sans font-normal text-foreground mt-4", "text-xl md:text-3xl")}>
            Advocacia de Excelência e Estratégica
          </span>
        </h1>

        {/* Texto de apoio */}
        <p className="font-sans text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluções jurídicas modernas, atendimento personalizado e foco incansável em resultados nas áreas Cível, Familiar e Trabalhista.
        </p>

        {/* Botões de Ação (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Botão Principal Dourado */}
          <Link 
            href="/contato" 
            className="px-8 py-4 bg-gold text-dark font-bold text-lg rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 w-full sm:w-auto"
          >
            Agendar Consulta Online
          </Link>
          
          {/* Botão Secundário Transparente */}
          <Link 
            href="/areas-de-atuacao" 
            className="px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-sm hover:bg-gold/10 transition-all duration-300 w-full sm:w-auto"
          >
            Conhecer Áreas de Atuação
          </Link>
        </div>

      </div>
    </section>
  );
}