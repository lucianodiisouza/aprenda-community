import { Link } from "react-router-dom";
import type { RoadmapNode } from "../lib/content";
import { cn } from "../lib/cn";

const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Lista/linha do tempo dos nós da trilha - portado do academy (TrilhaTree),
 * sem a parte de progresso logado (o preview é sempre "não iniciado").
 */
export function TrilhaTree({ nodes, slug }: { nodes: RoadmapNode[]; slug: string }) {
  return (
    <div>
      <ol className="relative flex flex-col">
        <span aria-hidden="true" className="absolute bottom-8 left-[32px] top-8 w-px bg-border" />
        {nodes.map((node, i) => (
          <li key={node.id} className="relative">
            <Link
              to={`/trilhas/${slug}/${node.id}`}
              className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-card"
            >
              <span
                className={cn(
                  "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold transition-colors",
                  "border-border bg-background text-muted-foreground group-hover:border-brand-green group-hover:text-brand-green",
                )}
                aria-hidden="true"
              >
                {num(i)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-foreground group-hover:text-brand-green">
                  {node.title}
                </span>
              </span>
              <span
                className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-green"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
