import { GameStatus } from "@molecules/Notifications/BetLogger";
import { useState } from "react";

export type GameLoggerState = {
  status: GameStatus;
  setStatus: (status: GameStatus) => void;
  computerBet: string | null;
  setComputerBet: (bet: string) => void;
  userBet: string | null;
  setUserBet: (bet: string) => void;
  winner: {
    position: string;
    amount: number;
    color: string;
  } | null;
  setWinner: (
    winner: {
      position: string;
      amount: number;
      color: string;
    } | null
  ) => void;
};

export default function useLogger() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.PLACE_BET);
  const [computerBet, setComputerBet] = useState<string | null>(null);
  const [userBet, setUserBet] = useState<string | null>(null);
  const [winner, setWinner] = useState<{
    position: string;
    amount: number;
    color: string;
  } | null>(null);

  return {
    status,
    setStatus,
    computerBet,
    setComputerBet,
    userBet,
    setUserBet,
    winner,
    setWinner,
  };
}
