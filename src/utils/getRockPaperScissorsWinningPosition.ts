export enum RockPaperScissorsPosition {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
}

export const getWinningPosition = (
  computerBet: RockPaperScissorsPosition,
  userBet: RockPaperScissorsPosition
): string | null => {
  if (computerBet === userBet) return null;

  switch (computerBet) {
    case RockPaperScissorsPosition.ROCK:
      return userBet === RockPaperScissorsPosition.PAPER
        ? RockPaperScissorsPosition.PAPER
        : RockPaperScissorsPosition.ROCK;
    case RockPaperScissorsPosition.PAPER:
      return userBet === RockPaperScissorsPosition.SCISSORS
        ? RockPaperScissorsPosition.SCISSORS
        : RockPaperScissorsPosition.PAPER;
    case RockPaperScissorsPosition.SCISSORS:
      return userBet === RockPaperScissorsPosition.ROCK
        ? RockPaperScissorsPosition.ROCK
        : RockPaperScissorsPosition.SCISSORS;
    default:
      return null;
  }
};
