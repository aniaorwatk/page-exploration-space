import React from "react";
import Article from "./Article/Article";
import data from "./../../data/information";
import "./Information.scss";

const Information = () => {
  const [articles, setArticles] = React.useState(data);

  function toggle(id: number) {
    setArticles((prevArticles) => {
      return prevArticles.map((article) => {
        return article.id === id ? { ...article, on: !article.on } : article;
      });
    });
  }

  const squareElements = articles.map((article) => (
    <Article
      key={article.id}
      id={article.id}
      on={article.on}
      toggle={toggle}
      title={article.title}
      firstPartArticle={article.firstPartArticle}
      fullAricle={article.fullAricle}
    />
  ));

  return <div className="informationBox">
    <h2>Information</h2>
    
    {squareElements}
    
    </div>;
};

export default Information;
