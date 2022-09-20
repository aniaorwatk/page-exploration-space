import React from "react";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./Header.scss";

const Header = () => {
  const buttonType = "button";
  const buttonClass = "primary";
  const buttonLinkName = "/register";
  return (
    <header className="header">
      <div className="header__box">
      <h1>{labels.header.title}</h1>
      </div>
    </header>
  );
};

export default Header;
