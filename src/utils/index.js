export const setClassName = (pair, idx) => {
  if (pair.filter((item) => item.idx === idx).length) return "card is-flipped";
  return "card";
};
