import { createContext } from "react";

export type BetPosition = {
  title: string;
  bodyColor: string;
  borderColor: string;
  betAmount: null | number;
};

type GameContextType = {
  betPositions: BetPosition[];
  setBetPositions: (betPositions: BetPosition[]) => void;
  placeBet: (betAmount: number, position: string) => void;
  playGame: () => void;
  clearGame: () => void;
};
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);
