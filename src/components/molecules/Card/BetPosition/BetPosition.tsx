import { Chip } from "@atoms/Card/Chip";
import React, { Attributes } from "react";
import "./BetPosition.scss";

const BET_INCREMENT = 500;

interface BetPositionProps extends Attributes {
  bet: number | null;
  setBet: (bet: number) => void;
  betTitle: string;
  bodyColor: string;
  borderColor: string;
  isHighlighted?: boolean;
}

const BetPosition: React.FC<BetPositionProps> = ({
  bet,
  setBet,
  betTitle,
  bodyColor,
  borderColor,
  isHighlighted,
  ...props
}) => {
  return (
    <div
      {...{ props }}
      onClick={() => setBet(bet ? bet + BET_INCREMENT : BET_INCREMENT)}
      className="bet-position"
      style={{
        backgroundColor: bodyColor,
        border: `${isHighlighted ? "4px" : "2px"} solid ${borderColor}`,
      }}
    >
      {bet ? <Chip>{bet}</Chip> : ""}
      <span
        style={{
          color: borderColor,
        }}
        className="bet-position__title"
      >
        {betTitle}
      </span>
    </div>
  );
};

export default BetPosition;
