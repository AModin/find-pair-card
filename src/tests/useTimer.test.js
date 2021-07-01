import { act } from "react-dom/test-utils";
import { testHook } from "./TestHook";
import { useTimer } from "../hooks/useTimer";

let hook;

describe("useTimerTest", () => {
  beforeEach(() => {
    testHook(() => {
      hook = useTimer();
    });
  });

  test("it should start timer on game start", () => {
    jest.useFakeTimers();
    expect(hook.currentTime).toBe(0);
    act(() => hook.startGame());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.currentTime).toBe(1);
  });

  test("it should init game on start", () => {
    expect(hook.isGameStarted).toBe(false);
    act(() => hook.startGame());
    expect(hook.isGameStarted).toBe(true);
  });
});
