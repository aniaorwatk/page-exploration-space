import React from "react";
import labels from "../../labels";
import { IErrorContentType, IErrorType } from "../Register/RegisterHandler";

export const getErrorLogin = ({ login }: { login?: IErrorContentType }) => {
    return (login?.type === IErrorType.required && labels.register.warningRequired) 
  };
  

  export const getErrorsPassword = ({
    password,
  }: {
    password?: IErrorContentType;
  }) => {
    return (password?.type === IErrorType.required && labels.register.warningRequired) 


  };