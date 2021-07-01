import React, { useCallback, useEffect } from "react";
import { useGame } from "../hooks/useGame";
import { useTimer } from "../hooks/useTimer";
import { useCards } from "../hooks/useCards";

const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const {
    currentTime,
    initGame,
    startGame,
    isGameStarted,
    setCurrentTime,
    setGameId,
    setTimerPause,
  } = useTimer();
  const { pair, setActivePair, matched, turns, setTurn, setMatched } =
    useGame();
  const [cards, updateCards] = useCards();
  const resetGame = useCallback(() => {
    setTurn(0);
    setCurrentTime(0);
    setGameId(null);
    initGame(false);
    updateCards(Date.now());
    setMatched([]);
    setTimerPause(false);
  }, []);
  useEffect(() => {
    if (matched.length === 18) {
      setTimerPause(true);
    }
  }, [matched.length]);
  return (
    <GameContext.Provider
      value={{
        currentTime,
        startGame,
        isGameStarted,
        turns,
        matched,
        pair,
        setActivePair,
        resetGame,
        cards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameStore = () => React.useContext(GameContext);
