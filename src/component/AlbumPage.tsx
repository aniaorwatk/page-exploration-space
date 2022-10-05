import React from "react";
import ButtonReturn from "./Buttons/ButtonReturn/ButtonReturn";
import Header from "./Header/Header";
import SecondAlbum from "./SecondAlbum/SecondAlbum";
import photo from "../assets/secondAlbum/brown-and-black-galaxy.jpg"



{/* <div className="albumPage"></div>
   </div> */}
const AlbumPage = () => {
  return (
    <>
      <Header />
      <div className="albumPage__box">
        <ButtonReturn />
        <SecondAlbum />
      </div>
    </>
  );
};

export default AlbumPage;
