import { useGameStore } from "./context";
import { memo } from "react";
export const GameInfo = memo(() => {
  const { currentTime, turns } = useGameStore();
  return (
    <div className="info">
      Turns:{turns} Time passed: {currentTime}
    </div>
  );
});
