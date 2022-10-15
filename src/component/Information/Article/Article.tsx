import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./../../../data/information"
import "./Article.scss";

const Article =()=>{

    const [articleShown, setArticleShown] = useState(false);
    const toggleArticle = () => {
        setArticleShown(!articleShown);
    };
    return(
        <article>
             {data.map((item) => {
          return (
            <div className="secondAlbum__box-album--photo" key={item.id}>
              <h3 className="secondAlbum__box-album--title">{item.title}</h3>
              {articleShown && <p>{item.firstPartArticle} <span onClick={toggleArticle}>Learn More</span></p>} 
 <p>{item.firstPartArticle} </p>
{!articleShown &&<span onClick={toggleArticle}>Learn less</span>}

{/* <Link to={`${item.id}`}>
<span>Learn More</span>
                    </Link> */}
            </div>
          );
        })}
        </article>
    )
}

export default Article