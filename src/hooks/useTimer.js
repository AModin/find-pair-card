import { useCallback, useEffect, useState } from "react";

export const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isGameStarted, initGame] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [isTimerPaused, setTimerPause] = useState(false);
  const startGame = useCallback(() => {
    setGameId(Date.now());
    initGame(true);
  }, [isGameStarted]);
  useEffect(() => {
    if (gameId && isGameStarted && !isTimerPaused) {
      setTimeout(() => setCurrentTime(currentTime + 1), 1000);
    }
    if (!gameId && !isGameStarted) {
      setCurrentTime(0);
    }
  }, [isGameStarted, gameId, currentTime, isTimerPaused]);

  return {
    setGameId,
    isGameStarted,
    startGame,
    currentTime,
    setCurrentTime,
    initGame,
    setTimerPause,
  };
};
