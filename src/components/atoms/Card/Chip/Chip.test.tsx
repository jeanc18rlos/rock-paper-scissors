import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Chip from "./Chip";

describe("Chip", () => {
  it("should render the chip", () => {
    render(<Chip>100</Chip>);
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
