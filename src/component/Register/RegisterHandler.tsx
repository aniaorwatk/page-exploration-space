import React from "react";
import { LiteralUnion, MultipleFieldErrors, Ref } from "react-hook-form";
import eyeOn from "../../assets/photo/eye-regular.svg";
import eyeOff from "../../assets/photo/eye-slash-regular.svg";
import labels from "../../labels";


export const eyeOnPassword = eyeOn;
export const eyeOffPassword = eyeOff;

export const InputType = {
    textType: "text",
    emailType: "email",
    checkboxType: "checkbox",
  };

  export const formInputsType = {
    typeLogin: "login",
    typeEmail: "email",
    typePassword: "password",
    typeRepeatPassword: "repeatPassword",
  };

  export const nameInputs = {
    nameLogin: "login",
    nameEmail: "email",
    namePassword: "password",
    nameRepeatPassword: "repeatPassword",
  };

  export enum IErrorType {
    required = "required",
    maxLength = "maxLength",
    minLength = "minLength",
    validate = "validate",
  } 

  export interface IErrorContentType {
    type: ErrorType;
    message?: string;
  }

  export type FieldError = {
    type: LiteralUnion<
      | "firstName"
      | "required"
      | "min"
      | "max"
      | "maxLength"
      | "minLength"
      | "pattern"
      | "validate"
      | "valueAsNumber"
      | "valueAsDate"
      | "value"
      | "setValueAs"
      | "shouldUnregister"
      | "onChange"
      | "onBlur"
      | "disabled"
      | "deps",
      string
    >;
    root?: FieldError | undefined;
    ref?: Ref | undefined;
    types?: MultipleFieldErrors | undefined;
    message?: string | undefined;
  };
  
  export interface IErrors {
    login: "string";
    email: "string";
    password: "string";
    repeatPassword: "string";

  }
  
  type ErrorType =
    | (string & { _?: never })
    | "required"
    | "min"
    | "max"
    | "maxLength"
    | "minLength"
    | "pattern"
    | "validate"
    | "valueAsNumber"
    | "valueAsDate"
    | "value";


    export const getErrorLogin = ({
        login,
      }: {
        login?: IErrorContentType;
      }) => {
        return (
          (login?.type === IErrorType.required && labels.register.warningRequired) ||
          (login?.type === IErrorType.maxLength &&
            labels.register.warningMaxCharacters) ||
          (login?.type === IErrorType.minLength &&
            labels.register.warningMinCharacters)
        );
      };

      export const getErrorsEmail = ({ email }: { email?: IErrorContentType }) => {
        return (
          (email?.type === IErrorType.required && labels.register.warningRequired) ||
          (email?.type === IErrorType.maxLength && labels.register.warningMaxCharacters)
        );
      };  

      export const getErrorsPassword = ({
        password,
      }: {
        password?: IErrorContentType;
      }) => {
        return (
          (password?.type === IErrorType.required && labels.register.warningRequired) ||
          (password?.type === IErrorType.maxLength &&
            labels.register.warningMaxCharacters) ||
          (password?.type === IErrorType.minLength &&
            labels.register.warningMinCharactersPassword) ||
          (password?.type === IErrorType.validate && labels.register.warningDifferentName)
        );
      };
      
      export const getErrorsRepeatPassword = ({
        repeatPassword,
      }: {
        repeatPassword?: IErrorContentType;
      }) => {
        return (
          (repeatPassword?.type === IErrorType.required &&
            labels.register.warningRequired) ||
          (repeatPassword?.type === IErrorType.maxLength &&
            labels.register.warningMaxCharacters) ||
          (repeatPassword?.type === IErrorType.minLength &&
            labels.register.warningMinCharactersPassword) ||
          (repeatPassword?.type === IErrorType.validate &&
            labels.register.warningMatchPassword)
        );
      };