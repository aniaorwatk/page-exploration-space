import React from "react";
import AlbumNasa from "./AlbumNasa/AlbumNasa";
import Header from "./Header/Header";
import RandomImage from "./RandomImage/RandomImage";
import Settings from "./Settings/Settings";

const Main = () => {
  return (
    <>
      <Header />
      <Settings />
      <AlbumNasa />  
      <RandomImage />
    </>
  );
};

export default Main;
