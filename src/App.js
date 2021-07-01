import "./styles.css";
import { GameProvider } from "./context";
import { GameInfo } from "./GameInfo";
import { Buttons } from "./Buttons";

import { CardsLayout } from "./CardsLayout";

export default function App() {
  return (
    <GameProvider>
      <div className="App">
        <div className="container">
          <GameInfo />
          <CardsLayout />
          <Buttons />
        </div>
      </div>
    </GameProvider>
  );
}
