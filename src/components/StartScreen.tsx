interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-5 sm:p-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-16 w-64 h-64 rounded-full blur-3xl bg-cyan-400/25 animate-[neon-float_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-72 h-72 rounded-full blur-3xl bg-fuchsia-500/20 animate-[neon-float_9s_ease-in-out_infinite]" />

      <div className="relative scanlines neon-panel rounded-3xl p-6 sm:p-8 w-full max-w-md text-center">
        <p className="uppercase tracking-[0.32em] text-[11px] text-cyan-200/85 mb-3">Mixer Edition</p>
        <h1 className="neon-title text-4xl sm:text-5xl font-extrabold mb-3">Bingo Mixer</h1>
        <p className="text-lg text-cyan-100/90 mb-8">Find your people. Light up the board.</p>

        <div className="rounded-2xl p-5 border border-cyan-300/30 bg-indigo-950/45 backdrop-blur mb-8 text-left">
          <h2 className="font-semibold text-cyan-100 tracking-wide mb-3 uppercase text-sm">How to play</h2>
          <ul className="text-indigo-100/90 text-sm sm:text-base space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="neon-button w-full font-bold py-4 px-8 rounded-2xl text-lg transition-transform duration-150 active:scale-[0.98]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
