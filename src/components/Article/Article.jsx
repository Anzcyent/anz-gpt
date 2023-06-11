import React from "react";
import "./Article.scss";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="article">
      <div className="article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
