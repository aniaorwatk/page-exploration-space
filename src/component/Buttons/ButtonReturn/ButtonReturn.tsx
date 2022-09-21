import React from "react";
import { Link } from "react-router-dom";
import './ButtonReturn.scss';

const ButtonReturn = () => {
  const labelLink = "Return";
  return (
    <button type="button" className="btnReturn">
      <Link to="/"> <span className="btnReturn__link">{labelLink}</span></Link >
    </button>
  );
};

export default ButtonReturn;
