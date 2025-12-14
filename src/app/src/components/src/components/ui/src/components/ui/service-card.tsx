import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon; // Recebe o componente do ícone
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-xl bg-dark-lighter border border-dark-accent hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10">
      {/* Ícone Dourado */}
      <div className="mb-6 inline-block p-4 rounded-lg bg-darkAccent/30 text-gold group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      {/* Título do Serviço */}
      <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      
      {/* Descrição */}
      <p className="font-sans text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}