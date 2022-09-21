import React from "react";
import { Link } from "react-router-dom";
import './ButtonReturn.scss';

const ButtonReturn = () => {
  const labelLink = "Return";
  return (
    <button type="button" className="btnReturn">
      <Link to="/">{labelLink}</Link>
    </button>
  );
};

export default ButtonReturn;
