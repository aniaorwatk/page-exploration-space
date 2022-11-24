import React from "react";
import data from "./../../data/information";
import labels from "../../labels";
import Article from "./Article/Article";
import ButtonReturn from "../Buttons/ButtonReturn/ButtonReturn";
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

  const articleElements = articles.map((article) => {
    const { id, on, title, firstPartArticle, fullAricle } = article;
    return (
      <Article
        key={id}
        id={id}
        on={on}
        toggle={toggle}
        title={title}
        firstPartArticle={firstPartArticle}
        fullAricle={fullAricle}
      />
    );
  });

  return (
    <div className="informationBox">
      <h2>{labels.information.title}</h2>
      {articleElements}
      <ButtonReturn />
    </div>
  );
};

export default Information;
