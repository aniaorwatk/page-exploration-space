import React from "react";
import data from "./../../../data/information"
import "./Article.scss";

const Article =()=>{
    return(
        <article>
             {data.map((item) => {
          return (
            <div className="secondAlbum__box-album--photo" key={item.id}>
              <h3 className="secondAlbum__box-album--title">{item.title}</h3>
              <p>{item.firstPartArticle}</p>
              
            </div>
          );
        })}
        </article>
    )
}

export default Article