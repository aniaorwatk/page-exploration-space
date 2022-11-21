import { TextField } from "@mui/material";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./RandomImage.scss";

const RandomImage = () => {
  const getMemeImage = () => {
    return <div></div>;
  };

  return (
    <div className="randomImage">
      <h3>{labels.randomImage.title}</h3>
      <div className="randomImage__form">
        <TextField
          sx={{ width: "30ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="Top text"
          className="form--input"
        />
        <TextField
          sx={{ width: "30ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="Bottom text"
          className="form--input"
        />

        <ButtonPrimary
          customClassName={"primary"}
          type={"button"}
          buttonLabel={labels.randomImage.lableBtn}
          onClick={getMemeImage}
        />
      </div>
      <img src="nnn" className="randomImage__img" alt="meme img" />
    </div>
  );
};

export default RandomImage;
