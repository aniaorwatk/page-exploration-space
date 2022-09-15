import React from "react";
import { Link } from "react-router-dom";

import "./ButtonPrimary.scss";

export interface IButtonPrimaryType {
  buttonLabel?: string;
  customClassName: string;
  type: "submit" | "reset" | "button";
  isDisabled?: boolean;
  linkLabel?: string;
  linkName?: string;
  onClick?: () => void;
}

const ButtonPrimary = ({
  customClassName,
  buttonLabel,
  type,
  isDisabled,
  linkLabel,
  linkName = "",
  onClick,
}: IButtonPrimaryType) => {
  return (
    <button
      type={type}
      className={customClassName}
      disabled={isDisabled}
      onClick={onClick}
    >
      {buttonLabel}
      <Link to={linkName}>{linkLabel}</Link>
    </button>
  );
};

export default ButtonPrimary;
