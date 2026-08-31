import { Link } from "react-router-dom";
import { getRoadmaps, DIFFICULTY_LABEL } from "../lib/content";
import { Badge } from "../components/Badge";

export function IndexPage() {
  const roadmaps = getRoadmaps();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan">
          // preview local
        </p>
        <h1 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-balance sm:text-4xl">
          Trilhas
        </h1>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Preview do conteúdo de <code className="font-mono text-brand-green">roadmaps/</code> com o
          visual do site. É só uma prévia - progresso, login e busca não estão aqui.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((r) => (
          <Link
            key={r.slug}
            to={`/trilhas/${r.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-cyan"
          >
            <div className="flex items-center gap-2">
              <Badge variant="info">{DIFFICULTY_LABEL[r.difficulty]}</Badge>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {r.nodes.length} nós
              </span>
            </div>
            <h2 className="font-display text-xl font-black uppercase tracking-tight text-foreground group-hover:text-brand-cyan">
              {r.title}
            </h2>
            <p className="line-clamp-3 text-sm text-muted-foreground">{r.description}</p>
          </Link>
        ))}
      </div>

      {roadmaps.length === 0 && (
        <p className="mt-10 rounded-lg border border-dashed border-border p-6 text-muted-foreground">
          Nenhuma trilha encontrada em <code className="font-mono">roadmaps/</code>.
        </p>
      )}
    </div>
  );
}
