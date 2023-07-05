import { useContext } from "react";
import "./BetLogger.scss";
import { GameLoggerContext } from "@context/loggerContext";

export enum GameStatus {
  PLACE_BET = "PLACE_BET",
  EVALUATE_BETS = "EVALUATE_BETS",
  WON = "WON",
  LOST = "LOST",
}

export type BetLoggerProps = {
  status: GameStatus;
  userChoice: string | null;
  computerChoice: string | null;
  winner: {
    position: string;
    amount: number;
    color: string;
  } | null;
};

const BetLogger: React.FC<BetLoggerProps> = ({
  status,
  userChoice,
  computerChoice,
  winner,
}) => {
  const Component = () => {
    switch (status) {
      case GameStatus.PLACE_BET:
        return (
          <span className="bet-logger__pick-positions">
            Pick your positions
          </span>
        );
      case GameStatus.EVALUATE_BETS:
        return (
          <>
            {userChoice && computerChoice && (
              <h1 className="bet-logger__versus">
                {userChoice} <span className="separator">vs</span>
                {computerChoice}
              </h1>
            )}
          </>
        );
      case GameStatus.WON:
        return (
          <>
            {winner && (
              <>
                <h1
                  className="bet-logger__won"
                  style={{
                    color: winner.color,
                  }}
                >
                  {winner.position} WON
                </h1>
                <h3 className="bet-logger__win-amount">
                  You win <span>{winner.amount}</span>
                </h3>
              </>
            )}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <section className="bet-logger">
      <Component />
    </section>
  );
};

export default () => {
  const { status, userBet, computerBet, winner } =
    useContext(GameLoggerContext);
  return (
    <BetLogger
      status={status}
      userChoice={userBet}
      computerChoice={computerBet}
      winner={winner}
    />
  );
};
