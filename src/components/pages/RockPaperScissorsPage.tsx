import useLogger from "@hooks/useLogger";
import { usePlayerStats } from "@hooks/usePlayerStats";
import BetGamePageTemplate from "@templates/BetGamePageTemplate";
import { useState } from "react";
import { GameStatus } from "@molecules/Notifications/BetLogger";
import pickRandom from "@utils/pickRandom";
import { PlayerStatsContext } from "@context/userStatsContext";
import { GameLoggerContext } from "@context/loggerContext";
import { BetPosition, GameContext } from "@context/gameContext";
import BET_POSITIONS from "@constants/rock_paper_scissors_bet_positions";
import {
  RockPaperScissorsPosition,
  getWinningPosition,
} from "@utils/getRockPaperScissorsWinningPosition";

const BET_POSITION_LIMIT = 2;
function RockPaperScissorsPage() {
  const {
    userBalance,
    setUserBalance,
    userBetAmount,
    setBetAmount,
    userWonGames,
    setWonGames,
  } = usePlayerStats();

  const {
    status,
    setStatus,
    computerBet,
    setComputerBet,
    userBet,
    setUserBet,
    winner,
    setWinner,
  } = useLogger();

  const [betPositions, setBetPositions] = useState<
    {
      title: string;
      borderColor: string;
      bodyColor: string;
      betAmount: null | number;
    }[]
  >(BET_POSITIONS);

  const placeBet = (amount: number, position: string) => {
    const userBetpositions = new Set();

    betPositions.forEach((betPosition) => {
      if (betPosition.betAmount) {
        userBetpositions.add(betPosition.title);
      }
    });

    userBetpositions.add(position);

    if (
      amount < userBalance &&
      userBetpositions.size <= BET_POSITION_LIMIT &&
      status === GameStatus.PLACE_BET
    ) {
      setBetAmount(amount + userBetAmount);
      setUserBalance(userBalance - amount);
      setBetPositions(
        betPositions.map((betPosition) => {
          if (betPosition.title === position) {
            return {
              ...betPosition,
              betAmount: amount,
            };
          }
          return betPosition;
        })
      );
    }
  };

  const finishGame = async (machineChoice: RockPaperScissorsPosition) => {
    const userBetpositions = betPositions.filter(
      (position) => position.betAmount
    );

    let winAmount = 0;
    userBetpositions.forEach((userBetposition) => {
      const winningPosition = getWinningPosition(
        userBetposition.title as RockPaperScissorsPosition,
        machineChoice as RockPaperScissorsPosition
      );

      if (winningPosition === userBetposition.title) {
        winAmount += userBetposition.betAmount!;
      }
    });

    if (winAmount > 0) {
      let winMultiplier = 1;

      if (userBetpositions.length === 1) {
        winMultiplier = 14;
      } else if (userBetpositions.length === 2) {
        winMultiplier = 3;
      }

      await setWinner({
        position: userBetpositions[0].title,
        amount: winAmount * winMultiplier,
        color: userBetpositions[0].borderColor,
      });
      await setStatus(GameStatus.WON);
      await setWonGames(userWonGames + 1);
      await setUserBalance(userBalance + winAmount * winMultiplier);
    } else {
      setWinner(null);

      setStatus(GameStatus.LOST);
    }
  };

  const playGame = async () => {
    if (userBetAmount > 0) {
      const randomMachineBet = pickRandom<BetPosition>(BET_POSITIONS).title;

      const userBetpositions = betPositions.filter(
        (position) => position.betAmount
      );

      const userChosenPosition: string | null = userBetpositions[0].title;
      await setComputerBet(randomMachineBet);
      await setUserBet(userChosenPosition);
      await setStatus(GameStatus.EVALUATE_BETS);
      setTimeout(
        () => finishGame(randomMachineBet as RockPaperScissorsPosition),
        1000
      );
    }
  };

  const clearGame = () => {
    setStatus(GameStatus.PLACE_BET);
    setBetAmount(0);
    setUserBet(null);
    setComputerBet(null);
    setWinner(null);
    setBetPositions(
      betPositions.map((betPosition) => {
        return {
          ...betPosition,
          betAmount: null,
        };
      })
    );
  };

  return (
    <PlayerStatsContext.Provider
      value={{
        userBalance,
        setUserBalance,
        userBetAmount,
        setBetAmount,
        userWonGames,
        setWonGames,
      }}
    >
      <GameLoggerContext.Provider
        value={{
          status,
          setStatus,
          computerBet,
          setComputerBet,
          userBet,
          setUserBet,
          winner,
          setWinner,
        }}
      >
        <GameContext.Provider
          value={{
            betPositions,
            setBetPositions,
            placeBet,
            playGame,
            clearGame,
          }}
        >
          <BetGamePageTemplate />
        </GameContext.Provider>
      </GameLoggerContext.Provider>
    </PlayerStatsContext.Provider>
  );
}

export default RockPaperScissorsPage;
