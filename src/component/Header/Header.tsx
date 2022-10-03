import React from "react";
import labels from "../../labels";
import Welcome from "../Welcome/Welcome";
import "./Header.scss";

const Header = () => {
  const buttonType = "button";
  const buttonClass = "primary";
  const buttonLinkName = "/register";
  return (
    <header className="header">
      <div className="header__box">
        <h1 className="header__box-title">{labels.header.title}</h1>
        <Welcome />
      </div>
    </header>
  );
};

export default Header;
