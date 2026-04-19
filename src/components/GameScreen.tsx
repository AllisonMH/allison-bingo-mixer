import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full px-2 sm:px-4 py-3 sm:py-5 text-cyan-50">
      {/* Header */}
      <header className="neon-panel rounded-2xl px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
        <button
          onClick={onReset}
          className="rounded-xl border border-fuchsia-300/35 bg-fuchsia-400/10 text-fuchsia-100 text-sm px-3 py-1.5 active:scale-[0.98] transition-transform"
        >
          ← Back
        </button>
        <h1 className="neon-title text-sm sm:text-base font-bold text-center">Bingo Mixer</h1>
        <div className="rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-2.5 py-1 text-[11px] uppercase tracking-wider text-cyan-100/90">
          Live
        </div>
      </header>

      {/* Instructions */}
      <p className="text-center text-cyan-100/85 text-sm py-3 px-4 tracking-wide uppercase">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-2 sm:mx-0 rounded-xl border border-yellow-200/55 bg-yellow-300/20 text-yellow-100 text-center py-2 font-semibold text-sm animate-[neon-pulse_1.5s_ease-in-out_infinite]">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
