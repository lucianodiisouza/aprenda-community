import { Link } from "react-router-dom";

export function NotFound({ label = "Não encontrado" }: { label?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">// 404</p>
      <h1 className="mt-2 font-display text-3xl font-black uppercase tracking-tight">{label}</h1>
      <Link to="/" className="mt-6 inline-block font-mono text-sm text-brand-cyan hover:underline">
        ← voltar para as trilhas
      </Link>
    </div>
  );
}
