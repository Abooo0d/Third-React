import React from "react";
import "./Article.css";
const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imageUrl} alt="Blog Image" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
