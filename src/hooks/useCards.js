import { useMemo, useState } from "react";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const useCards = () => {
  const [isNeedUpdate, updateCards] = useState(Date.now());
  const cards = useMemo(
    () =>
      shuffle([
        ...Array.from({ length: 18 }, (_, i) => i + 1),
        ...Array.from({ length: 18 }, (_, i) => i + 1),
      ]),
    [isNeedUpdate]
  );
  return [cards, updateCards];
};
