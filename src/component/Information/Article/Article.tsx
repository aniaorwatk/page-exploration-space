import "./Article.scss";

interface ITypArticle {
  id: number;
  on: boolean;
  title: string;
  firstPartArticle: string | JSX.Element;
  fullAricle: string | JSX.Element;
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

  // const learn = {

  //           <span className="article__text-learn" onClick={() => toggle(id)}>
  //         {on ? "Learn less" : "Learn more..."}
  //       </span>  

  // }
  return (
    <div className="article">
      <h3 className="article__title">{title}</h3>
      <div className="article__text" >
        {on ? (
          <article className="article__text-full">{fullAricle}<span className="article__text-learn" onClick={() => toggle(id)}>
          {on ? "Learn less" : "Learn more..."}
        </span>  </article>
        ) : (
          <article className="article__text-short">
            {firstPartArticle}             <span className="article__text-learn" onClick={() => toggle(id)}>
          {on ? "Learn less" : "Learn more..."}
        </span>  
          </article>
        )}
      </div>
    </div>
  );
};

export default Article;
