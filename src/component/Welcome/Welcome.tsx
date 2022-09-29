import React from "react";
import labels from "../../labels";
import "./Welcome.scss";

const Welcome = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = labels.welcome.morning;
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = labels.welcome.afternoon;
  } else if (hours >= 17 && hours < 21) {
    timeOfDay = labels.welcome.evening;
  } else {
    timeOfDay = labels.welcome.night;
  }

  return <p className="welcomeExplorer">{labels.welcome.textWelcomeBeginning} {timeOfDay} {labels.welcome.textWelcomeEnd}</p>;
};

export default Welcome;
