import React from "react";
import { setClassName } from "./utils";
import { useGameStore } from "./context";

export const CardsLayout = React.memo(() => {
  const { pair, setActivePair, matched, cards, isGameStarted } = useGameStore();

  if (!isGameStarted) return <div className="empty__layout">Push start</div>;
  if (matched.length === 18) return <div className="empty__layout">Win!</div>;

  return (
    <>
      {cards.map((item, idx) => {
        return (
          <div key={`${item}::${idx}`}>
            {!matched.includes(item) ? (
              <div className="scene scene--card">
                <div
                  className={setClassName(pair, idx)}
                  onClick={() => setActivePair({ item, idx })}
                >
                  <div className="card__face card__face--front">
                    Жмякни меня {item}
                  </div>
                  <div className={`card__face card__face--back card__color_${item}`}>
                    {item}
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty__placeholder" />
            )}
          </div>
        );
      })}
    </>
  );
});
