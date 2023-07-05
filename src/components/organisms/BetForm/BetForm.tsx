import React, { FormEvent, useContext } from "react";
import { GameStatus } from "@molecules/Notifications/BetLogger";
import { BetPosition } from "@molecules/Card/BetPosition";
import { Button } from "@atoms/Form/Button";
import "./BetForm.scss";
import { GameContext } from "@context/gameContext";
import { GameLoggerContext } from "@context/loggerContext";

interface BetFormProps {
  bet: (bet: number, betPosition: string) => void;
  play: () => void;
  clear: () => void;
  status: GameStatus;
  betPositions: {
    title: string;
    bodyColor: string;
    borderColor: string;
    betAmount: number | null;
  }[];
}

const BetForm: React.FC<BetFormProps> = ({
  bet,
  betPositions,
  status,
  play,
  clear,
}) => {
  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (status) {
      case GameStatus.WON:
      case GameStatus.LOST:
        clear();
        break;
      case GameStatus.EVALUATE_BETS:
        return betPositions.forEach(({ betAmount, title }) => {
          if (betAmount) bet(betAmount, title);
        });
      case GameStatus.PLACE_BET:
        play();
        break;
      default:
        break;
    }
  };
  const { winner } = useContext(GameLoggerContext);
  return (
    <form className="bet-form" onSubmit={onsubmitHandler}>
      <div className="l-container bet-form__bet-positions">
        {betPositions.map(({ title, borderColor, bodyColor, betAmount }) => {
          return (
            <BetPosition
              bet={betAmount}
              borderColor={borderColor}
              bodyColor={bodyColor}
              key={title}
              betTitle={title}
              setBet={(number) => bet(number, title)}
              isHighlighted={Boolean(
                status === GameStatus.WON && winner && winner.position === title
              )}
            ></BetPosition>
          );
        })}
      </div>
      <div className="bet-form__button-container">
        <Button type="submit" disabled={status === GameStatus.EVALUATE_BETS}>
          {status === GameStatus.WON || status === GameStatus.LOST
            ? "Clear"
            : "Play"}
        </Button>
      </div>
    </form>
  );
};

export default () => {
  const { status } = useContext(GameLoggerContext);
  const { placeBet, playGame, clearGame, betPositions } =
    useContext(GameContext);

  return (
    <BetForm
      status={status}
      bet={(amount, position) => {
        placeBet(amount, position);
      }}
      play={() => {
        playGame();
      }}
      clear={() => {
        clearGame();
      }}
      betPositions={betPositions}
    />
  );
};
