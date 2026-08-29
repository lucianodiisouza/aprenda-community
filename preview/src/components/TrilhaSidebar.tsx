import { Link, useParams } from "react-router-dom";
import type { RoadmapNode } from "../lib/content";
import { cn } from "../lib/cn";

const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Sidebar estilo documentação nas páginas de nó - lista os nós da trilha e
 * destaca o atual. Portado do academy (TrilhaSidebar), sem progresso logado.
 */
export function TrilhaSidebar({ title, nodes, slug }: { title: string; nodes: RoadmapNode[]; slug: string }) {
  const { nodeId } = useParams();

  return (
    <aside className="mb-8 lg:mb-0">
      <div className="lg:sticky lg:top-8">
        <Link
          to={`/trilhas/${slug}`}
          className="font-display text-sm font-black uppercase tracking-tight text-foreground hover:text-brand-cyan"
        >
          {title}
        </Link>
        <nav className="mt-4">
          <ol className="flex flex-col gap-0.5">
            {nodes.map((node, i) => {
              const active = node.id === nodeId;
              return (
                <li key={node.id}>
                  <Link
                    to={`/trilhas/${slug}/${node.id}`}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-card font-medium text-brand-green"
                        : "text-muted-foreground hover:bg-card hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[11px]",
                        active ? "text-brand-green" : "text-muted-foreground/70",
                      )}
                    >
                      {num(i)}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{node.title}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
