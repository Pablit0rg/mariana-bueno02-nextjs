import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Essa funçãozinha mágica ajuda a juntar classes do Tailwind de forma condicional e sem conflitos.
// Vamos usar ela em quase todos os nossos componentes.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}