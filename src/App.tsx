import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardDeckScreen } from './components/CardDeckScreen';

function App() {
  const [appMode, setAppMode] = useState<'start' | 'bingo' | 'cards'>('start');

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  if (appMode === 'start') {
    return (
      <StartScreen
        onStart={() => { startGame(); setAppMode('bingo'); }}
        onCardDeck={() => setAppMode('cards')}
      />
    );
  }

  if (appMode === 'cards') {
    return <CardDeckScreen onBack={() => setAppMode('start')} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={() => { resetGame(); setAppMode('start'); }}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
