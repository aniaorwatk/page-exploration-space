import React from "react";
import AlbumNasa from "./AlbumNasa/AlbumNasa";
import ButtonReturn from "./Buttons/ButtonReturn/ButtonReturn";
import Header from "./Header/Header";

const AlbumPage =()=>{
    return(

        <div className="albumPage">
        <Header />
        <div className="albumPage__box">
            <ButtonReturn />
        <div className="albumPage__box-photos">
            
            <AlbumNasa />
  
            </div>
        </div>
      </div>
   
    )
}

export default AlbumPage