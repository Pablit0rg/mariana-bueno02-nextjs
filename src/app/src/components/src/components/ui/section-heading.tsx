import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = true }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {/* Título Dourado e Serifado */}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-4">
        {title}
      </h2>
      {/* Subtítulo opcional */}
      {subtitle && (
        <p className="font-sans text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Uma pequena linha decorativa dourada abaixo do título */}
      <div className={cn("h-1 w-24 bg-gold mt-4 rounded-full", centered && "mx-auto")} />
    </div>
  );
}