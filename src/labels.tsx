import React from "react"

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
    title: 'Rejestracja',
    emailLabel: 'E-mail',
    emailPlaceholder: 'Email',
    loginLabel: 'Your Nick',
    loginPlaceholder: 'Your Nick in app',
    placeholderPassword: "Hasło",
    placeholderRepeatPassword: "Powtórz hasło",
    labelPassword: "Podaj hasło:",
    labelRepeatPassword: "Powtórz hasło:",
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
}

}

export default labels