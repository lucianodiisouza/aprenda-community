import { MDXProvider } from "@mdx-js/react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { mdxComponents } from "./mdx/components";
import { IndexPage } from "./pages/IndexPage";
import { TrilhaPage } from "./pages/TrilhaPage";
import { NodePage } from "./pages/NodePage";
import { NotFound } from "./components/NotFound";

function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-sm font-black uppercase tracking-tight hover:text-brand-cyan">
          Aprenda <span className="text-brand-green">·</span> preview
        </Link>
        <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          local
        </span>
      </div>
    </header>
  );
}

export function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <div className="min-h-screen">
          <TopBar />
          <main>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/trilhas/:slug" element={<TrilhaPage />} />
              <Route path="/trilhas/:slug/:nodeId" element={<NodePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MDXProvider>
  );
}
