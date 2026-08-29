import { useRef, useState, type ComponentProps } from "react";
import { cn } from "../lib/cn";

/**
 * Override da tag `<pre>` do MDX (portado do academy): mantém o bloco de código
 * e adiciona um botão "copiar" no canto.
 */
export function CodeBlock({ className, children, ...props }: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = ref.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard indisponível - ignora. */
    }
  }

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={copy}
        className={cn(
          "absolute right-2 top-2 z-10 rounded-md border border-border bg-card/80 px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur transition-colors",
          "opacity-0 focus-visible:opacity-100 group-hover:opacity-100 hover:border-brand-green hover:text-brand-green",
          copied && "border-brand-green text-brand-green opacity-100",
        )}
        aria-label={copied ? "Código copiado" : "Copiar código"}
      >
        {copied ? "copiado!" : "copiar"}
      </button>
      <pre ref={ref} className={className} {...props}>
        {children}
      </pre>
    </div>
  );
}
