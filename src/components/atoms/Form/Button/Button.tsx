import React, { ButtonHTMLAttributes } from "react";
import classNames from "@utils/classNames";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button
      className={classNames(
        "primary-button",
        disabled ? "button--disabled" : ""
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
