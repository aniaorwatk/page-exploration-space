import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./RandomImage.scss";

interface ITypeRandomImage {
  url: string;
}

const RandomImage = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState<ITypeRandomImage[]>([]);
  const URL ="https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="randomImageBox">
      <div className="randomImage">
        <h3>{labels.randomImage.title}</h3>
        <div className="randomImage__form">
          <TextField
            sx={{ maxWidth: "30ch" }}
            id="demo-helper-text-misaligned-no-helper"
            label={labels.randomImage.labelTopText}
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <TextField
            sx={{ maxWidth: "30ch" }}
            id="demo-helper-text-misaligned-no-helper"
            label={labels.randomImage.labelBottomText}
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
          <img
            src={meme.randomImage}
            className="randomImage__meme-img"
            alt={labels.randomImage.altMemeImg}
          />
          <h2 className="randomImage__meme-text top">{meme.topText}</h2>
          <h2 className="randomImage__meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default RandomImage;
