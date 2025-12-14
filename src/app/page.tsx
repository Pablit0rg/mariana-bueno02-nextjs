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
  import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
// Importe a nova seção
import { AboutSection } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* Adicione ela aqui */}
      <AboutSection />
    </>
  );
}