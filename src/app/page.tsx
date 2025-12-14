export default function Home() {
  return (
    // Uma seção principal (main) que centraliza o conteúdo
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      {/* Título Principal usando a fonte Serifada e cor Dourada */}
      <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold mb-6">
        Mariana Bueno
        <span className="block text-2xl md:text-3xl text-gold-light mt-2 font-normal">
          Advocacia de Excelência
        </span>
      </h1>

      {/* Subtítulo usando a fonte Sans e cor clara padrão */}
      <p className="font-sans text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
        Soluções jurídicas modernas e estratégicas, focadas em resultados e no atendimento personalizado.
      </p>

      {/* Um botão de teste para ver a cor dourada em ação */}
      <div className="mt-10">
        <button className="px-8 py-3 bg-gold text-dark font-semibold rounded hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
          Conheça Nossas Áreas
        </button>
      </div>

    </section>
  );
}