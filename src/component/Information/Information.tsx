import React from "react";
import Article from "./Article/Article";
import data from "./../../data/information"
import "./Information.scss"
import { assertQualifiedTypeIdentifier } from "@babel/types";

const Information =()=>{

    const [articles, setArticles] = React.useState(data)
    
    function toggle(id: number) {
        setArticles(prevArticles => {
            return prevArticles.map((article) => {
                return article.id === id ? {...article, on: !article.on} : article
            })
        })
    }
    
    const squareElements = articles.map(article => (
        <Article 
            key={article.id}
            id={article.id}
            on={article.on}
            toggle={toggle} 
            title={article.title} 
            firstPartArticle={article.firstPartArticle} 
            fullAricle={article.fullAricle}        />
    ))





    return(
        <div>
           {squareElements}
        </div>
    )
}

export default Information


