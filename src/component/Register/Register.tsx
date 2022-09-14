import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels, { maxCharacters, minCharacters, minCharactersPassword } from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./Register.scss";
import { eyeOffPassword, eyeOnPassword } from "./RegisterHandler";

export  interface IRegisterFormType{
login: 'string',
email: 'string',
password: "string";
  repeatPassword: "string";
}

const Register = () => {

    const buttonType = 'submit';
    const buttonClass= 'primary';

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
        validate: (value) =>
          value !== login.current && value !== login.current,
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
    
      const onSubmit: SubmitHandler<IRegisterFormType> = (data) => console.log(data);

  return (
    <div className="register">
      <div className="register__box">
        <h1>{labels.register.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>


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
