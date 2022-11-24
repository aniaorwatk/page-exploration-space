import labels from "../../../labels";
import "./Article.scss";

interface ITypArticle {
  id: number;
  on: boolean;
  title: string;
  firstPartArticle?: string | JSX.Element;
  fullAricle?: string | JSX.Element;
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
    <div className="article">
      <h3 className="article__title">{title}</h3>
      <div className="article__text">
        <article>
          {on ? fullAricle : firstPartArticle}
          <span className="article__text-learn" onClick={() => toggle(id)}>
            {on ? labels.information.textLess : labels.information.textMore}
          </span>
        </article>
      </div>
    </div>
  );
};

export default Article;
