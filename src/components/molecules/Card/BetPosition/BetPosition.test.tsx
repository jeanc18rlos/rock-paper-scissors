import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BetPosition from "./BetPosition";

describe("BetPosition", () => {
  it("renders bet title correctly", () => {
    const { getByText } = render(
      <BetPosition
        bet={null}
        betTitle="Test Bet"
        setBet={() => {}}
        bodyColor="blue"
        borderColor="red"
      />
    );
    expect(getByText("Test Bet")).toBeInTheDocument();
  });

  it("renders bet amount correctly", () => {
    const { getByText } = render(
      <BetPosition
        betTitle="Test Bet"
        setBet={() => {}}
        bet={1000}
        bodyColor="blue"
        borderColor="red"
      />
    );
    fireEvent.click(getByText("Test Bet"));
    expect(getByText("1000")).toBeInTheDocument();
  });

  it("calls setBet with correct increment on click", () => {
    const mockSetBet = jest.fn();
    const { getByText } = render(
      <BetPosition
        bet={1000}
        betTitle="Test Bet"
        setBet={mockSetBet}
        bodyColor="blue"
        borderColor="red"
      />
    );
    fireEvent.click(getByText("Test Bet"));
    expect(mockSetBet).toHaveBeenCalledWith(1500); // 1000 + 500
  });
});
