import React from "react";
import AlbumNasa from "./AlbumNasa/AlbumNasa";
import Header from "./Header/Header";
import Settings from "./Settings/Settings";

const Main = () => {
  return (
    <>
      <Header />
      <Settings />
      <div className="main">
      <AlbumNasa />  
      </div>
      
    </>
  );
};

export default Main;
