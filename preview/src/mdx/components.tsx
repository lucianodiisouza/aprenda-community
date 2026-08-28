import type { ComponentProps, ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";
import { Quiz } from "./Quiz";
import { Mermaid } from "./Mermaid";

/**
 * Componentes interativos que rodam no site (Playground, Checkpoint, etc.)
 * aparecem no preview como um cartão marcado - o preview foca em estrutura,
 * prosa e recursos, não em reexecutar o runtime completo do academy.
 */
function InteractivePlaceholder({ kind, children }: { kind: string; children?: ReactNode }) {
  return (
    <div className="not-prose my-8 rounded-xl border border-dashed border-brand-purple/50 bg-brand-purple/5 p-5">
      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-purple">
        // {kind} · interativo no site
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Este bloco é interativo na plataforma. No preview mostramos apenas que ele existe aqui.
      </p>
      {children ? <div className="mt-3 text-sm text-foreground/80">{children}</div> : null}
    </div>
  );
}

const makePlaceholder = (kind: string) =>
  function Placeholder({ children }: { children?: ReactNode }) {
    return <InteractivePlaceholder kind={kind}>{children}</InteractivePlaceholder>;
  };

function YouTube({ id, title }: { id?: string; title?: string }) {
  if (!id) return null;
  return (
    <div className="not-prose my-8 aspect-video w-full overflow-hidden rounded-xl border border-border">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title ?? "Vídeo"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Anchor({ href, children, ...props }: ComponentProps<"a">) {
  const external = href?.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...props}>
      {children}
    </a>
  );
}

/** Mapa passado ao MDXProvider. Cobre os componentes usados no conteúdo real. */
export const mdxComponents = {
  pre: CodeBlock,
  a: Anchor,
  Quiz,
  Mermaid,
  YouTube,
  Checkpoint: makePlaceholder("Checkpoint"),
  VisualCheckpoint: makePlaceholder("VisualCheckpoint"),
  Playground: makePlaceholder("Playground"),
  PyPlayground: makePlaceholder("PyPlayground"),
  LiveExample: makePlaceholder("LiveExample"),
  Figure: ({ children }: { children?: ReactNode }) => <figure className="my-6">{children}</figure>,
};
