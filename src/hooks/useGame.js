import { useState, useEffect } from "react";

export const useGame = () => {
  const [pair, setPair] = useState([]);
  const [matched, setMatched] = useState([]);
  const [turns, setTurn] = useState(0);
  const [isClickDisabled, setDisabledClick] = useState(false);
  const setActivePair = (item) => {
    if (isClickDisabled || pair.some((el) => el.idx === item.idx)) return;
    if (pair.length) {
      setPair([...pair, item]);
    } else {
      setPair([item]);
    }
  };

  useEffect(() => {
    if (pair.length === 2) {
      setDisabledClick(true);
      setTimeout(() => {
        if (pair[0].item === pair[1].item) {
          setMatched([...matched, pair[1].item]);
        }
        setPair([]);
        setDisabledClick(false);
      }, 1000);
      setTurn(turns + 1);
    }
  }, [pair]);

  return {
    pair,
    setActivePair,
    matched,
    turns,
    isClickDisabled,
    setTurn,
    setMatched,
  };
};
