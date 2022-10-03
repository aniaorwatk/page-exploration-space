import React from "react";
import ButtonReturn from "./Buttons/ButtonReturn/ButtonReturn";
import Header from "./Header/Header";
import SecondAlbum from "./SecondAlbum/SecondAlbum";
import photo from "../assets/secondAlbum/brown-and-black-galaxy.jpg"

const AlbumPage = () => {
  return (
    <div className="albumPage">
      <Header />
      <div className="albumPage__box">
        <ButtonReturn />
        <SecondAlbum />

      </div>
    </div>
  );
};

export default AlbumPage;
