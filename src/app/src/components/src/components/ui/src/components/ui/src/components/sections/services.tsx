import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
// Importamos os ícones específicos que vamos usar
import { Scale, Users, Briefcase } from "lucide-react";

// Dados dos serviços (Fácil de editar depois!)
const servicesData = [
  {
    title: "Direito Civil",
    description: "Atuação estratégica em contratos, responsabilidade civil, indenizações e disputas patrimoniais complexas.",
    icon: Scale,
  },
  {
    title: "Direito de Família",
    description: "Assessoria sensível e firme em divórcios, guarda, pensão e inventários, protegendo seu patrimônio e legado.",
    icon: Users,
  },
  {
    title: "Direito Trabalhista",
    description: "Defesa especializada de direitos trabalhistas para empregados e empregadores, com foco em compliance e resolução de conflitos.",
    icon: Briefcase,
  },
];

export function ServicesSection() {
  return (
    // Seção com fundo padrão e espaçamento vertical (py-24)
    <section id="areas-de-atuacao" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Usando nosso componente de título */}
        <SectionHeading
          title="Áreas de Atuação"
          subtitle="Expertise jurídica refinada para resolver conflitos complexos com segurança e eficiência."
        />

        {/* Grid de 3 colunas para os cartões */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}