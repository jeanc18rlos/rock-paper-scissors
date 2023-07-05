import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Mock classNames module
import classNames from "@utils/classNames";

jest.mock("@utils/classNames");

import Button from "./Button";

describe("Button", () => {
  beforeEach(() => {
    (classNames as jest.Mock).mockClear();
  });

  describe("Given no additional props", () => {
    it("should render as Button with correct className", () => {
      (classNames as jest.Mock).mockReturnValue("primary-button");

      render(<Button />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("primary-button");
    });
  });

  describe("Given disabled prop", () => {
    it("should render as disabled Button with correct className", () => {
      (classNames as jest.Mock).mockReturnValue(
        "primary-button button--disabled"
      );

      render(<Button disabled />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
      expect(button).toHaveClass("primary-button button--disabled");
    });
  });
});
