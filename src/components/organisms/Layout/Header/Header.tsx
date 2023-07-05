import React from "react";
import { Stats } from "@organisms/Layout/Stats";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header l-page-layout--two-column">
      <div className="header__inner l-container">
        <nav className="header__nav-container l-page-layout__main">
          <div className="l-grid">
            <div className="l-grid__item">
              <Stats />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
