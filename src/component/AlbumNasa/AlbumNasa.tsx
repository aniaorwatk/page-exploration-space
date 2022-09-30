import React, { useEffect, useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./AlbumNasa.scss";

interface IPhotoType {
  img_src: "string";
  earth_date: "string";
}

const AlbumNasa = () => {
  const APY_KEY_NASA = "ybrCeRdUarm18MKHuXrVP35E9dfFj3uz6hy05wDk";
  const URL_NASA =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";

  const [photo, setPhoto] = useState<IPhotoType[]>([]);
  //   const [datePhoto, setDatePhoto]=useState<IPhotoType[]>([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const changePhoto = () => {
    const newPhoto = Math.floor(Math.random() * photo.length);
    setCurrentPhoto(newPhoto);
  };

  useEffect(() => {
    fetch(`${URL_NASA}${APY_KEY_NASA}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setPhoto(res.photos);
        console.log(res.photos);
        console.log(res.photos);
        console.log(res.photos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="albumNasa">
      <div className="albumNasa__box">
        <div className="albumNasa__box-img">
          {photo.length > 0 && <img src={photo[currentPhoto].img_src} />}
          <p className="albumNasa__box-img--date">{photo[currentPhoto].earth_date}</p>
        </div >
        <ButtonPrimary
          type="button"
          customClassName="primary"
          buttonLabel="change Photo"
          onClick={changePhoto}
        />
      </div>
    </div>
  );
};

export default AlbumNasa;
