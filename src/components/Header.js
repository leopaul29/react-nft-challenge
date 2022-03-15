import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punkLogo" className="punkLogo" />
      </div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
