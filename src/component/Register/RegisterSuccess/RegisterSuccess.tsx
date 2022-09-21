import React from "react";
import labels from "../../../labels";
import ButtonReturn from "../../Buttons/ButtonReturn/ButtonReturn";
import "./RegisterSuccess.scss";

const RegisterSuccess = () => {
  return (
    <div className="registerSuccess">
      <div className="registerSuccess__box">
        <h2 className="registerSuccess__box-title">
          {labels.registerSuccess.title}
        </h2>
        <p className="registerSuccess__box-text">{labels.registerSuccess.text}</p>
        <ButtonReturn />
      </div>
    </div>
  );
};

export default RegisterSuccess;
