import { renderHook, act } from "@testing-library/react";
import { usePlayerStats } from "./usePlayerStats";

describe("usePlayerStats", () => {
  it("should initialize with correct values", () => {
    const { result } = renderHook(() => usePlayerStats());

    expect(result.current.userBalance).toBe(5000);
    expect(result.current.userBetAmount).toBe(0);
    expect(result.current.userWonGames).toBe(0);
  });

  it("should set balance correctly", () => {
    const { result } = renderHook(() => usePlayerStats());

    act(() => {
      result.current.setUserBalance(4000);
    });

    expect(result.current.userBalance).toBe(4000);
  });

  it("should set bet correctly", () => {
    const { result } = renderHook(() => usePlayerStats());

    act(() => {
      result.current.setBetAmount(500);
    });

    expect(result.current.userBetAmount).toBe(500);
  });

  it("should set win correctly", () => {
    const { result } = renderHook(() => usePlayerStats());

    act(() => {
      result.current.setWonGames(7000);
    });

    expect(result.current.userWonGames).toBe(7000);
  });
});