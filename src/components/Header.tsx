import React from "react";

import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { userDataFormat } from "../models";

interface HeaderProps {
  toggleSidebar: () => void;
  selectedItem: userDataFormat;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, selectedItem }) => (
  <header className="header">
    <Hamburger className="header__icon" onClick={toggleSidebar} />
    <span>
      {selectedItem && selectedItem.firstName}{" "}
      {selectedItem && selectedItem.lastName}
    </span>
  </header>
);

export default Header;
