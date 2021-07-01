import { memo } from "react";
import { useGameStore } from "./context";

export const Buttons = memo(() => {
  const { startGame, isGameStarted, resetGame } = useGameStore();
  return (
    <button
      onClick={() => {
        !isGameStarted ? startGame(true) : resetGame();
      }}
      className="start__button"
    >
      {isGameStarted ? "End game" : "Start game"}
    </button>
  );
});
