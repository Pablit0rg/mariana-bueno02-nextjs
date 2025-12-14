import { HeroSection } from "@/components/sections/hero";
// Importe a nova seção
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Adicione ela aqui embaixo */}
      <ServicesSection />
    </>
  );
}