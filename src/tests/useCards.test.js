import { act } from "react-dom/test-utils";
import { testHook } from "./TestHook";
import { useCards } from "../hooks/useCards";

let hook;

describe("useCardsTest", () => {
  beforeEach(() => {
    testHook(() => {
      hook = useCards();
    });
  });

  test("it should return cards", () => {
    expect(hook[0]).toBeInstanceOf(Array);
    expect(hook[0].length).toBe(36);
  });

  test("it should return not same arrays", () => {
    const cards1 = hook[0];
    act(() => hook[1]());
    const cards2 = hook[0];
    expect(cards1).not.toEqual(cards2);
  });

  test("it should return 18 uniq cards", () => {
    expect([...new Set(hook[0])].length).toBe(18);
  });
});
