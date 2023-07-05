import React, { PropsWithChildren } from "react";
import "./Chip.scss";

const Chip: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"chip"}>
      <span>{children}</span>
      <div className="chip__spacer"></div>
    </div>
  );
};

export default Chip;
