import React from "react";
import { Link } from "react-router-dom";

export const maxCharacters: number = 255;
export const maxCharactersTextatea: number = 1400;
export const minCharacters: number = 2;
export const minCharactersPassword: number = 6;

const labels = {
  header: {
    buttonLabelLink: "Join",
    title: (
      <>
        Join the space<span className="header__span"> exploration</span>
      </>
    ),
  },

  welcome:{
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
    textWelcomeBeginning: "Good",
    textWelcomeEnd: "explorer",
  },
  register: {
    title: "Register",
    emailLabel: "E-mail:",
    emailPlaceholder: "Email",
    loginLabel: "Your Nick:",
    loginPlaceholder: "Your Nick in app",
    placeholderPassword: "Password",
    placeholderRepeatPassword: "Repeat Password",
    labelPassword: "Your password:",
    labelRepeatPassword: "Repeat your password:",
    buttonLabel: "Join us",
    warningRequired: "To pole jest Wymagane",
    warningRequiredAgreement: "Zgoda jest wymagana",
    warningMaxCharacters: `To pole może mieć maksymalnie ${maxCharacters}`,
    warningMaxCharactersTextarea: `To pole może mieć maksymalnie ${maxCharactersTextatea}`,
    warningMinCharacters: `To pole może mieć minimalnie ${minCharacters}`,
    warningMinCharactersPassword: `To pole może mieć minimalnie ${minCharactersPassword}`,
    warningDifferentName: `Hasło nie może być takie samo Nick`,
    warningMatchPassword: `Hasła muszą się zgadzać`,
    altImg: "Podglądnij hasło",
    logOn: (
      <>
        If you have an account, please<Link to="/login"> log in</Link>.
      </>
    ),
  },

  registerSuccess:{
title:'Thank you for your registration',
text:'We have sent you all the information on your e-mail',
  },

  login: {
    title: "Login",
    loginLabel: "Your Nick or E-mail:",
    loginPlaceholder: "Nick or E-mail",
    buttonLabel: "Log in",
    registerOn: (
      <>
        If you not have an account, please<Link to="/register"> register in</Link>.
      </>
    ),
  },

  albumNasa:{
    textAboutMars:"Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. Mars, the fourth planet from the sun, is famed for its rusty red appearance. The Red Planet is a cold, desert world with a very thin atmosphere. But the dusty, lifeless (as far as we know it) planet is far from dull. Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up."
  },
information:{
textFirst: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

};

export default labels;
