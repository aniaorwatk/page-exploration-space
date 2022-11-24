import "./Article.scss";

interface ITypArticle {
  id: number;
  on: boolean;
  title: string;
  firstPartArticle?: string | JSX.Element;
  fullAricle?: string | JSX.Element;
  toggle: (id: number) => void;
  children?: React.ReactNode;
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
            {on ? "Learn less" : "Learn more..."}
          </span>
        </article>
      </div>
    </div>
  );
};

export default Article;
