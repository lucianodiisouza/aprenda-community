import { useId, useState } from "react";
import { cn } from "../lib/cn";

export interface QuizOption {
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface QuizProps {
  question: string;
  options: QuizOption[];
  label?: string;
}

/** Múltipla escolha interativa - portado 1:1 do academy. */
export function Quiz({ question, options, label = "Quiz" }: QuizProps) {
  const [chosen, setChosen] = useState<number | null>(null);
  const reactId = useId();
  const groupName = `quiz-${reactId}`;

  if (!options || options.length === 0) return null;

  return (
    <div
      className="not-prose my-8 rounded-xl border border-border bg-card p-5"
      role="group"
      aria-labelledby={`${groupName}-q`}
    >
      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-cyan">
        // {label}
      </p>
      <p id={`${groupName}-q`} className="mt-1 text-base font-semibold text-foreground sm:text-lg">
        {question}
      </p>

      <fieldset className="mt-4 flex flex-col gap-2 border-0 p-0">
        <legend className="sr-only">Escolha uma alternativa</legend>
        {options.map((opt, i) => {
          const isChosen = chosen === i;
          const showFeedback = chosen !== null;
          const isCorrect = opt.correct;
          const isRight = showFeedback && isChosen && isCorrect;
          const isWrong = showFeedback && isChosen && !isCorrect;
          const isOtherCorrect = showFeedback && !isChosen && isCorrect;

          return (
            <label
              key={i}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 transition-colors",
                !showFeedback && "border-border hover:border-foreground/40 hover:bg-background/30",
                isRight && "border-brand-green/60 bg-brand-green/10",
                isWrong && "border-destructive/60 bg-destructive/10",
                isOtherCorrect && "border-brand-green/40 bg-brand-green/5",
                showFeedback && !isChosen && !isOtherCorrect && "border-border opacity-60",
              )}
            >
              <input
                type="radio"
                name={groupName}
                value={i}
                checked={isChosen}
                disabled={chosen !== null}
                onChange={() => setChosen(i)}
                className="mt-1 size-4 cursor-pointer accent-brand-green disabled:cursor-not-allowed"
              />
              <span className="flex-1 text-sm text-foreground">{opt.text}</span>
              {isRight && (
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green">✓</span>
              )}
              {isWrong && (
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-destructive">✗</span>
              )}
            </label>
          );
        })}
      </fieldset>

      {chosen !== null && (
        <div aria-live="polite" className="mt-4 rounded-md border border-border bg-background/40 p-3 text-sm">
          {(() => {
            const picked = options[chosen];
            if (!picked) return null;
            const correctIndex = options.findIndex((o) => o.correct);
            return (
              <>
                <p
                  className={cn(
                    "font-display text-sm font-bold uppercase",
                    picked.correct ? "text-brand-green" : "text-destructive",
                  )}
                >
                  {picked.correct ? "Acertou!" : "Ainda não."}
                </p>
                {picked.explanation && <p className="mt-1 text-muted-foreground">{picked.explanation}</p>}
                {!picked.correct && correctIndex >= 0 && options[correctIndex]?.explanation && (
                  <p className="mt-2 text-muted-foreground">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-brand-cyan">
                      Resposta certa:
                    </span>{" "}
                    {options[correctIndex]?.explanation}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setChosen(null)}
                  className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  Tentar de novo
                </button>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
