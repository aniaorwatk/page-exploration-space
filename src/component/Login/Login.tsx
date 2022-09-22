import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonReturn from "../Buttons/ButtonReturn/ButtonReturn";
import Input from "../Input/Input";
import {
  buttonClass,
  buttonType,
  eyeOffPassword,
  eyeOnPassword,
  formInputsType,
  getErrorLogin,
  getErrorsPassword,
  InputType,
  nameInputs,
} from "../Register/RegisterHandler";
import "./Login.scss";

export interface ILoginFormType {
  login: "string";
  password: "string";
}

const Login = () => {
  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<ILoginFormType>({});

  const inputLogin = register("login", {
    required: true,
  });

  const inputPassword = register("password", {
    required: true,
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const passwordType = `${passwordShown ? "text" : "password"}`;
  const imgEye = `${passwordShown ? eyeOffPassword : eyeOnPassword}`;

  const onSubmit: SubmitHandler<ILoginFormType> = (data) => console.log(data);

  return (
    <div className="login">
      <div className="login__box">
        <ButtonReturn/>
        <h1>{labels.login.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={getErrorLogin({ login: errors.login })}
            labelType={formInputsType.typeLogin}
            label={labels.login.loginLabel}
            placeholder={labels.login.loginPlaceholder}
            inputType={InputType.textType}
            inputRequired={inputLogin}
            nameInput={nameInputs.nameLogin}
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
          <ButtonPrimary
            type={buttonType}
            customClassName={buttonClass}
            buttonLabel={labels.login.buttonLabel}
          />
        </form>
        <p>{labels.login.registerOn}</p>
      </div>
    </div>
  );
};

export default Login;
