import { useContext } from "react";
import "./Stats.scss";
import { PlayerStatsContext } from "@context/userStatsContext";
import { PlayerStatsState } from "@hooks/usePlayerStats";

interface StatsProps {
  balance: number;
  bet: number;
  win: number;
}

export const Stats: React.FC<StatsProps> = ({ balance, bet, win }) => {
  return (
    <ul className="player-stats">
      <li>
        <b>BALANCE: </b>
        <span>{balance}</span>
      </li>
      <li>
        <b>BET: </b>
        <span>{bet}</span>
      </li>
      <li>
        <b>WIN: </b>
        <span>{win}</span>
      </li>
    </ul>
  );
};

export default () => {
  const value = useContext<PlayerStatsState>(PlayerStatsContext);
  const { userBalance, userBetAmount, userWonGames } = value;
  return <Stats balance={userBalance} bet={userBetAmount} win={userWonGames} />;
};
