import { GameLoggerState } from "@hooks/useLogger";
import { createContext } from "react";

export const GameLoggerContext = createContext<GameLoggerState>(
  {} as GameLoggerState
);
