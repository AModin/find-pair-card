import { act } from "react-dom/test-utils";
import { testHook } from "./TestHook";
import { useGame } from "../hooks/useGame";

let hook;

describe("useGameTest", () => {
  beforeEach(() => {
    testHook(() => {
      hook = useGame();
    });
  });

  test("should add a cards and change turn", () => {
    expect(hook.pair.length).toBe(0);
    expect(hook.turns).toBe(0);
    act(() => hook.setActivePair({ item: 1, idx: 1 }));
    expect(hook.pair.length).toBe(1);
    act(() => hook.setActivePair({ item: 2, idx: 2 }));
    expect(hook.pair.length).toBe(2);
    expect(hook.turns).toBe(1);
  });

  test("should add a cards to matched list", (done) => {
    jest.useFakeTimers();
    expect(hook.matched.length).toBe(0);
    act(() => hook.setActivePair({ item: 7, idx: 1 }));
    act(() => hook.setActivePair({ item: 7, idx: 2 }));
    act(() => jest.advanceTimersByTime(3000));
    expect(hook.matched[0]).toBe(7);
    done();
  });

  test("should disable click after second adding second card", () => {
    expect(hook.isClickDisabled).toBe(false);
    act(() => hook.setActivePair({ item: 7, idx: 2 }));
    act(() => hook.setActivePair({ item: 8, idx: 6 }));
    expect(hook.isClickDisabled).toBe(true);
  });

  test("should not allow to add the same card twice", () => {
    act(() => hook.setActivePair({ item: 7, idx: 2 }));
    act(() => hook.setActivePair({ item: 7, idx: 2 }));
    expect(hook.pair.length).toBe(1);
  });
});
