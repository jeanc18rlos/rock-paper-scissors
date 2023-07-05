import { createContext } from "react";
import { PlayerStatsState } from "@hooks/usePlayerStats";

export const PlayerStatsContext = createContext<PlayerStatsState>(
  {} as PlayerStatsState
);
