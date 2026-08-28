import { useParams } from "react-router-dom";
import { getRoadmap, linearizeNodes, DIFFICULTY_LABEL } from "../lib/content";
import { Badge } from "../components/Badge";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TrilhaTree } from "../components/TrilhaTree";
import { NotFound } from "../components/NotFound";

export function TrilhaPage() {
  const { slug = "" } = useParams();
  const roadmap = getRoadmap(slug);

  if (!roadmap) return <NotFound label={`Trilha "${slug}" não encontrada`} />;

  const crumbs = [{ label: "Trilhas", href: "/" }, { label: roadmap.title }];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumbs items={crumbs} />

      <header className="group relative mt-6 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-cyan/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-green/10 blur-3xl"
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <Badge variant="info">{DIFFICULTY_LABEL[roadmap.difficulty]}</Badge>
          </div>
          <h1 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-balance sm:text-4xl">
            {roadmap.title}
          </h1>
          <p className="mt-2 max-w-prose text-muted-foreground">{roadmap.description}</p>

          {roadmap.creators.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {roadmap.creators.map((c) => (
                <a
                  key={c.github}
                  href={`https://github.com/${c.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <img
                    src={`https://github.com/${c.github}.png`}
                    alt=""
                    className="size-6 rounded-full border border-border"
                  />
                  {c.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="mt-10 max-w-6xl">
        <section aria-label="Nós da trilha">
          <TrilhaTree nodes={linearizeNodes(roadmap)} slug={slug} />
        </section>
      </div>
    </div>
  );
}
