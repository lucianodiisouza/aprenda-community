import { clsx, type ClassValue } from "clsx";

/** Une classes condicionais (versão enxuta do `cn` do academy). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
