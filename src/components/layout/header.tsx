import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-4 px-6 bg-dark border-b border-dark-accent z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Nome do Escritório */}
        <Link href="/" className="font-serif text-2xl text-gold font-bold tracking-wider">
          Mariana Bueno
          <span className="block text-sm font-sans text-gold-light font-normal tracking-normal">
            Advocacia
          </span>
        </Link>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 font-sans font-medium">
          <Link href="/" className="text-foreground hover:text-gold transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="text-foreground hover:text-gold transition-colors">
            Sobre
          </Link>
          <Link href="/areas-de-atuacao" className="text-foreground hover:text-gold transition-colors">
            Áreas de Atuação
          </Link>
          <Link href="/contato" className="text-foreground hover:text-gold transition-colors">
            Contato
          </Link>
          
          {/* Botão de Chamada para Ação (CTA) */}
          <Link 
            href="/contato" 
            className="px-6 py-2 bg-gold text-dark font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}