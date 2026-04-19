import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1.5 sm:p-2 text-center border rounded-xl transition-all duration-150 select-none min-h-[62px] sm:min-h-[72px] text-[11px] sm:text-xs leading-tight break-words';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-yellow-300/28 border-yellow-200 text-yellow-50 shadow-[0_0_18px_rgba(255,228,79,0.55)]'
      : 'bg-marked border-marked-border text-lime-200 shadow-[0_0_14px_rgba(124,255,59,0.35)]'
    : 'bg-indigo-950/55 border-cyan-300/28 text-cyan-50/90 active:bg-indigo-900/70';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-extrabold text-[10px] sm:text-xs tracking-[0.06em] uppercase text-fuchsia-100 border-fuchsia-300/50 bg-fuchsia-500/20 shadow-[0_0_14px_rgba(255,82,217,0.45)]'
    : 'hover:scale-[1.03]';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span>{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-lime-200 text-xs">✓</span>
      )}
    </button>
  );
}
