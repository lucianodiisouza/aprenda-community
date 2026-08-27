import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Muda quando o nó muda, pra resetar o boundary entre navegações. */
  resetKey?: string;
}
interface State {
  error: Error | null;
}

/** Isola falhas de render de um MDX pra que um nó quebrado não derrube o app. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="my-8 rounded-xl border border-destructive/50 bg-destructive/10 p-5">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-destructive">
            // erro ao renderizar este nó
          </p>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap text-sm text-muted-foreground">
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
