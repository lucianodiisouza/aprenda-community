import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getRoadmap,
  getNodeById,
  getNodeComponent,
  linearizeNodes,
  hasNode,
  RESOURCE_TYPE_LABEL,
  type NodeModule,
  type Resource,
} from "../lib/content";
import { readingTimeMinutes } from "../lib/reading-time";
import { Badge } from "../components/Badge";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TrilhaSidebar } from "../components/TrilhaSidebar";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { NotFound } from "../components/NotFound";

export function NodePage() {
  const { slug = "", nodeId = "" } = useParams();
  const roadmap = getRoadmap(slug);

  if (!roadmap || !hasNode(slug, nodeId)) {
    return <NotFound label={`Nó "${nodeId}" não encontrado`} />;
  }

  const ordered = linearizeNodes(roadmap);
  const node = getNodeById(roadmap, nodeId);
  const index = ordered.findIndex((n) => n.id === nodeId);
  const prev = index > 0 ? ordered[index - 1] : undefined;
  const next = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined;

  const crumbs = [
    { label: "Trilhas", href: "/" },
    { label: roadmap.title, href: `/trilhas/${slug}` },
    { label: node?.title ?? nodeId },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
      <TrilhaSidebar title={roadmap.title} nodes={ordered} slug={slug} />

      <div className="min-w-0">
        <article className="max-w-3xl pb-12 lg:pt-2">
          <Breadcrumbs items={crumbs} />
          <ErrorBoundary resetKey={`${slug}/${nodeId}`}>
            <NodeArticle
              key={`${slug}/${nodeId}`}
              slug={slug}
              nodeId={nodeId}
              fallbackTitle={node?.title ?? nodeId}
              recommended={node?.recommended}
            />
          </ErrorBoundary>

          <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6">
            {prev ? (
              <Link
                to={`/trilhas/${slug}/${prev.id}`}
                className="group flex flex-1 flex-col rounded-lg border border-border p-4 transition-colors hover:border-brand-cyan"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  ← anterior
                </span>
                <span className="mt-1 font-medium text-foreground group-hover:text-brand-cyan">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {next ? (
              <Link
                to={`/trilhas/${slug}/${next.id}`}
                className="group flex flex-1 flex-col rounded-lg border border-border p-4 text-right transition-colors hover:border-brand-green"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  próximo →
                </span>
                <span className="mt-1 font-medium text-foreground group-hover:text-brand-green">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}

function NodeArticle({
  slug,
  nodeId,
  fallbackTitle,
  recommended,
}: {
  slug: string;
  nodeId: string;
  fallbackTitle: string;
  recommended?: boolean;
}) {
  const [mod, setMod] = useState<NodeModule | null>(null);
  const [minutes, setMinutes] = useState<number | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const importer = getNodeComponent(slug, nodeId);
    importer?.().then((m) => {
      if (!cancelled) setMod(m);
    });
    return () => {
      cancelled = true;
    };
  }, [slug, nodeId]);

  // Tempo de leitura calculado do texto já renderizado (fiel ao conteúdo real).
  useEffect(() => {
    if (mod && bodyRef.current) {
      setMinutes(readingTimeMinutes(bodyRef.current.textContent ?? ""));
    }
  }, [mod]);

  const title = mod?.frontmatter?.title ?? fallbackTitle;
  const resources: Resource[] = mod?.frontmatter?.resources ?? [];
  const Content = mod?.default;

  return (
    <>
      <header className="mt-4">
        {recommended && (
          <Badge variant="success">
            <span aria-hidden="true">★</span> essencial
          </Badge>
        )}
        <h1 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {minutes !== null && (
          <p className="mt-2 font-mono text-xs text-muted-foreground">{minutes} min de leitura</p>
        )}
      </header>

      <div
        ref={bodyRef}
        className="prose prose-invert mt-8 max-w-none prose-headings:font-display prose-a:text-brand-cyan prose-code:text-brand-green prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border prose-pre:bg-card"
      >
        {Content ? <Content /> : <div className="h-40 w-full animate-pulse rounded-lg bg-card" />}
      </div>

      {resources.length > 0 && (
        <section aria-labelledby="recursos-titulo" className="mt-12">
          <h2
            id="recursos-titulo"
            className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground"
          >
            {"// recursos"}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {resources.map((resource, i) => (
              <li key={`${resource.url}-${i}`}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand-cyan"
                >
                  <span className="font-medium text-card-foreground">{resource.title}</span>
                  <span className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{RESOURCE_TYPE_LABEL[resource.type]}</Badge>
                    {resource.free !== false ? (
                      <Badge variant="success">Grátis</Badge>
                    ) : (
                      <Badge variant="warn">Pago</Badge>
                    )}
                    {resource.lang === "en" && <Badge variant="info">Em inglês</Badge>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
