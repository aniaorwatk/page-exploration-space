import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels, {
  maxCharacters,
  minCharacters,
  minCharactersPassword,
} from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import Input from "../Input/Input";
import "./Register.scss";
import {
  eyeOffPassword,
  eyeOnPassword,
  formInputsType,
  getErrorLogin,
  getErrorsEmail,
  getErrorsPassword,
  getErrorsRepeatPassword,
  InputType,
  nameInputs,
} from "./RegisterHandler";

export interface IRegisterFormType {
  login: "string";
  email: "string";
  password: "string";
  repeatPassword: "string";
}

const Register = () => {
  const buttonType = "submit";
  const buttonClass = "primary";

  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    watch,
  } = useForm<IRegisterFormType>({});

  const login = useRef({});
  login.current = watch("login");
  const password = useRef({});
  password.current = watch("password");

  const inputLogin = register("login", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharacters,
  });

  const inputEmail = register("email", {
    required: true,
    maxLength: maxCharacters,
  });

  const inputPassword = register("password", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharactersPassword,
    validate: (value) => value !== login.current && value !== login.current,
  });

  const inputRepeatPassword = register("repeatPassword", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharactersPassword,
    validate: (value) => value === password.current,
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);
  const togglePasswordRepeat = () => {
    setPasswordRepeatShown(!passwordRepeatShown);
  };

  const passwordType = `${passwordShown ? "text" : "password"}`;
  const passwordRepeatType = `${passwordRepeatShown ? "text" : "password"}`;
  const imgEye = `${passwordShown ? eyeOffPassword : eyeOnPassword}`;
  const imgEyeRepeat = `${
    passwordRepeatShown ? eyeOffPassword : eyeOnPassword
  }`;

  const onSubmit: SubmitHandler<IRegisterFormType> = (data) =>
    console.log(data);

  return (
    <div className="register">
      <div className="register__box">
        <h1>{labels.register.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={getErrorLogin({ login: errors.login })}
            labelType={formInputsType.typeLogin}
            label={labels.register.loginLabel}
            placeholder={labels.register.loginPlaceholder}
            inputType={InputType.textType}
            inputRequired={inputLogin}
            nameInput={nameInputs.nameLogin}
          />
          <Input
            errors={getErrorsEmail({ email: errors.email })}
            labelType={formInputsType.typeEmail}
            label={labels.register.emailLabel}
            placeholder={labels.register.emailPlaceholder}
            inputType={InputType.emailType}
            inputRequired={inputEmail}
            nameInput={nameInputs.nameEmail}
          />
          <Input
            errors={getErrorsPassword({ password: errors.password })}
            labelType={formInputsType.typePassword}
            label={labels.register.labelPassword}
            placeholder={labels.register.placeholderPassword}
            inputType={passwordType}
            inputRequired={inputPassword}
            eyeImage={imgEye}
            altEyeInput={labels.register.altImg}
            handleClick={togglePassword}
            nameInput={nameInputs.namePassword}
          />
          <Input
            errors={getErrorsRepeatPassword({
              repeatPassword: errors.repeatPassword,
            })}
            labelType={formInputsType.typeRepeatPassword}
            label={labels.register.labelRepeatPassword}
            placeholder={labels.register.placeholderRepeatPassword}
            inputType={passwordRepeatType}
            inputRequired={inputRepeatPassword}
            eyeImage={imgEyeRepeat}
            altEyeInput={labels.register.altImg}
            handleClick={togglePasswordRepeat}
            nameInput={nameInputs.nameRepeatPassword}
          />

          <ButtonPrimary
            type={buttonType}
            customClassName={buttonClass}
            buttonLabel={labels.register.buttonLabel}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;



