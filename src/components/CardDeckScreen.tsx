import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onBack: () => void;
}

function getRandomQuestion(exclude?: string): string {
  const pool = exclude ? questions.filter((q) => q !== exclude) : questions;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function CardDeckScreen({ onBack }: CardDeckScreenProps) {
  const [current, setCurrent] = useState<string>(() => getRandomQuestion());
  const [flipped, setFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [dealCount, setDealCount] = useState(1);

  const deal = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setFlipped(true);

    setTimeout(() => {
      setCurrent(getRandomQuestion(current));
      setFlipped(false);
      setDealCount((n) => n + 1);
      setTimeout(() => setAnimating(false), 350);
    }, 350);
  }, [animating, current]);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-full p-5 sm:p-8 overflow-hidden">
      {/* Atmosphere blobs */}
      <div className="pointer-events-none absolute -top-24 left-0 w-80 h-80 rounded-full blur-3xl bg-fuchsia-500/20 animate-[neon-float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl bg-cyan-400/15 animate-[neon-float_11s_ease-in-out_infinite_reverse]" />

      {/* Header */}
      <div className="relative w-full max-w-md flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="text-fuchsia-300 hover:text-fuchsia-100 text-sm font-semibold uppercase tracking-widest transition-colors"
        >
          ← Back
        </button>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-300/70">Card Deck Shuffle</p>
        </div>
        <div className="w-12 text-right">
          <span className="text-xs font-mono text-indigo-300/60">#{dealCount}</span>
        </div>
      </div>

      {/* Card area */}
      <div className="relative w-full max-w-sm flex-1 flex flex-col items-center justify-center gap-8">
        {/* Card */}
        <div
          className="card-scene w-full"
          style={{ perspective: '1000px' }}
          onClick={deal}
        >
          <div
            className="card-body relative w-full"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: flipped ? 'rotateY(90deg)' : 'rotateY(0deg)',
              minHeight: '280px',
            }}
          >
            {/* Card face */}
            <div
              className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8 text-center select-none"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #0e1230 0%, #1a1040 50%, #0d1535 100%)',
                border: '1.5px solid',
                borderColor: 'color-mix(in srgb, #ff52d9 55%, transparent)',
                boxShadow: '0 0 32px color-mix(in srgb, #ff52d9 20%, transparent), 0 0 0 1px color-mix(in srgb, #ff52d9 15%, transparent), inset 0 1px 0 color-mix(in srgb, #ff52d9 20%, transparent)',
              }}
            >
              {/* Corner pips */}
              <span className="absolute top-4 left-5 text-fuchsia-400/60 text-xs font-mono">🃏</span>
              <span className="absolute bottom-4 right-5 text-fuchsia-400/60 text-xs font-mono rotate-180">🃏</span>

              <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-300/60 mb-5">Find someone who…</p>
              <p
                className="text-xl sm:text-2xl font-bold leading-snug"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#f2e8ff',
                  textShadow: '0 0 20px color-mix(in srgb, #ff52d9 40%, transparent)',
                }}
              >
                {current}
              </p>
            </div>
          </div>
        </div>

        {/* Deal button */}
        <button
          onClick={deal}
          disabled={animating}
          className="w-full max-w-xs font-bold py-4 px-8 rounded-2xl text-lg border-2 border-fuchsia-400/70 bg-fuchsia-500/15 text-fuchsia-100 hover:bg-fuchsia-500/25 hover:border-fuchsia-300 active:scale-[0.97] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur"
          style={{
            boxShadow: '0 0 20px color-mix(in srgb, #ff52d9 15%, transparent)',
          }}
        >
          Deal Next Card
        </button>

        <p className="text-indigo-300/50 text-xs text-center uppercase tracking-widest">
          Tap card or button to shuffle
        </p>
      </div>

      {/* Footer spacer */}
      <div className="h-4" />
    </div>
  );
}
