import React from "react";
import data from "./album"
import photo from "./secondAlbum/brown-and-black-galaxy.jpg"
import "./SecondAlbum.scss"


const SecondAlbum =()=>{

    const photo = "brown-and-black-galaxy.jpg"


    return (
        <div>
            {data.map(item => {
                console.log(item.src);
        return (
            <div key={item.id}>
           <p>{item.title}</p>     
           <img  key={item.id} src={`${item.src}`} alt="dsdadsdad" />
         
           
         
           
           </div>
        )
    }) }

        </div>
    )
}

export default SecondAlbum