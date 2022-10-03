import React from "react";
import data from "../../data/album";
import photo from "./secondAlbum/brown-and-black-galaxy.jpg";
import "./SecondAlbum.scss";

const SecondAlbum = () => {
  const photo = "brown-and-black-galaxy.jpg";

  return (
    <div className="secondAlbum">
      <div className="secondAlbum__box">
        {data.map((item) => {
          console.log(item.src);
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <img  src={`${item.src}`} alt="dsdadsdad" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondAlbum;
