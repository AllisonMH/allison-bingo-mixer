interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="scanlines neon-panel rounded-3xl p-6 max-w-xs w-full text-center animate-[neon-float_1.3s_ease-in-out_infinite]">
        <div className="text-5xl mb-4">⚡</div>
        <h2 className="neon-title text-3xl font-extrabold mb-2">BINGO!</h2>
        <p className="text-cyan-100/90 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="neon-button w-full font-bold py-3 px-6 rounded-xl active:scale-[0.98] transition-transform"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
