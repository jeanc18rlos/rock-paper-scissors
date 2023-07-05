import { useState } from "react";

const INITIAL_BALANCE = 5000;

export type PlayerStatsState = {
  userBalance: number;
  setUserBalance: React.Dispatch<React.SetStateAction<number>>;
  userBetAmount: number;
  setBetAmount: React.Dispatch<React.SetStateAction<number>>;
  userWonGames: number;
  setWonGames: React.Dispatch<React.SetStateAction<number>>;
};

export const usePlayerStats = (): PlayerStatsState => {
  const [userBalance, setUserBalance] = useState<number>(INITIAL_BALANCE);
  const [userBetAmount, setBetAmount] = useState<number>(0);
  const [userWonGames, setWonGames] = useState<number>(0);

  return {
    userBalance,
    setUserBalance,
    userBetAmount,
    setBetAmount,
    userWonGames,
    setWonGames,
  };
};
