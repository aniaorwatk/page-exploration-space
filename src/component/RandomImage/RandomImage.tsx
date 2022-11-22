import { TextField } from "@mui/material";
import { useState } from "react";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./RandomImage.scss";

const RandomImage = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = useState("")


function getMemeImage() {
    // const memesArray = allMemeImages.data.memes
    // const randomNumber = Math.floor(Math.random() * memesArray.length)
    // const url = memesArray[randomNumber].url
    // setMeme(prevMeme => ({
    //     ...prevMeme,
    //     randomImage: url
    // }))
    
}

function handleChange(event: { target: { name: string; value: string; }; }) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}



  return (
    <div className="randomImage">
      <h3>{labels.randomImage.title}</h3>
      <div className="randomImage__form">
        <TextField
          sx={{ maxWidth: "30ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <TextField
          sx={{ maxWidth: "30ch" }}
          id="demo-helper-text-misaligned-no-helper"
          label="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <ButtonPrimary
          customClassName={"primary"}
          type={"button"}
          buttonLabel={labels.randomImage.lableBtn}
          onClick={getMemeImage}
        />
      </div>
      <div className="randomImage__meme">
        <img src={meme.randomImage} className="randomImage__meme-img" alt="meme img" />
        <h2 className="randomImage__meme-text top">{meme.topText}</h2>
        <h2 className="randomImage__meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default RandomImage;
