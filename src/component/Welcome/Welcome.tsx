import React from "react";
import "./Welcome.scss";

const Welcome = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if ((hours >= 17 && hours < 21)){
    timeOfDay = "evening";
  }else {
    timeOfDay = "night";
  }

  return <p className="welcomeExplorer">Good {timeOfDay} explorer</p>;
};

export default Welcome;
