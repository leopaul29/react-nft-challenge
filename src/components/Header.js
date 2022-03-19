import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import ThemeSwitch from "./ThemeSwitch";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punkLogo" className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <ThemeSwitch />
      </div>

      <div className="loginButton">
        <a
          href="https://testnets.opensea.io/collection/cp-punks-31z9zk77zk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET IN
        </a>
      </div>
    </div>
  );
};

export default Header;
