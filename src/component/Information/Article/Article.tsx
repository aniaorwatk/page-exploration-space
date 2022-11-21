import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./../../../data/information";
import "./Article.scss";

interface ITypArticle {
  id: number;
  on: boolean;
  title: string;
  firstPartArticle: string;
  fullAricle: string;
  toggle: (id: number) => void;
}

const Article = ({
  id,
  on,
  title,
  firstPartArticle,
  fullAricle,
  toggle,
}: ITypArticle) => {
  return (
    <div>
      <h3>{title}</h3>
      {on ? (
        <article>{fullAricle} </article>
      ) : (
        <article> {firstPartArticle}  </article>
      )}
      <span onClick={() => toggle(id)}>
        {on ?   "Learn less" :"Learn more..."}
      </span>
    </div>
  );
};

export default Article;
