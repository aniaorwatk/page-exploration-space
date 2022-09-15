import React from "react"
import { Link } from "react-router-dom";

export const maxCharacters: number = 255;
export const maxCharactersTextatea: number = 1400;
export const minCharacters: number = 2;
export const minCharactersPassword: number = 6;

const labels={
header:{
    buttonLabelLink: 'Join',
    title: 'Join the exploration space',
},
register:{
    title: 'Register',
    emailLabel: 'E-mail:',
    emailPlaceholder: 'Email',
    loginLabel: 'Your Nick:',
    loginPlaceholder: 'Your Nick in app',
    placeholderPassword: "Password",
    placeholderRepeatPassword: "Repeat Password",
    labelPassword: "Your password:",
    labelRepeatPassword: "Repeat your password:",
    buttonLabel: 'Join us',
    warningRequired: "To pole jest Wymagane",
    warningRequiredAgreement: "Zgoda jest wymagana",
    warningMaxCharacters: `To pole może mieć maksymalnie ${maxCharacters}`,
    warningMaxCharactersTextarea: `To pole może mieć maksymalnie ${maxCharactersTextatea}`,
    warningMinCharacters: `To pole może mieć minimalnie ${minCharacters}`,
    warningMinCharactersPassword: `To pole może mieć minimalnie ${minCharactersPassword}`,
    warningDifferentName: `Hasło nie może być takie samo Nick`,
    warningMatchPassword: `Hasła muszą się zgadzać`,
    altImg: "Podglądnij hasło",
    logOn:<>If you have an account, please<Link to="/"> log in</Link>.</>
}

}

export default labels