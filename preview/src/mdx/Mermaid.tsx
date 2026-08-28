import { useEffect, useId, useState } from "react";
import { cn } from "../lib/cn";

export interface MermaidProps {
  chart: string;
  caption?: string;
  alt?: string;
  className?: string;
}

type State =
  | { kind: "loading" }
  | { kind: "ready"; svg: string }
  | { kind: "error"; message: string };

let mermaidPromise: Promise<typeof import("mermaid").default> | null = null;

async function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then((m) => {
      const mermaid = m.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "strict",
        fontFamily: "inherit",
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

/** Diagrama Mermaid renderizado como SVG - portado do academy. */
export function Mermaid({ chart, caption, alt, className }: MermaidProps) {
  const reactId = useId();
  const domId = `mermaid-${reactId.replace(/[:]/g, "")}`;
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = await getMermaid();
        const { svg } = await mermaid.render(domId, chart.trim());
        if (!cancelled) setState({ kind: "ready", svg });
      } catch (err) {
        if (!cancelled) {
          setState({ kind: "error", message: err instanceof Error ? err.message : String(err) });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, domId]);

  if (state.kind === "error") {
    return (
      <div className="not-prose my-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-destructive">
          // erro no diagrama mermaid
        </p>
        <pre className="mt-2 overflow-x-auto text-xs text-muted-foreground">{state.message}</pre>
      </div>
    );
  }

  return (
    <figure className={cn("not-prose my-8 flex flex-col items-center", className)}>
      {state.kind === "loading" ? (
        <div className="h-24 w-full animate-pulse rounded-lg bg-card" />
      ) : (
        <div
          className="flex w-full justify-center [&_svg]:h-auto [&_svg]:max-w-full"
          role="img"
          aria-label={alt ?? caption ?? "Diagrama"}
          dangerouslySetInnerHTML={{ __html: state.svg }}
        />
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
