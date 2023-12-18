import React from "react";
import "./Blog.css";
import { Article } from "../../Components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          a Lot Is Happening We Are Blogging About
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imageUrl={blog01}
            date="20/7/2001"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde?"
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article
            imageUrl={blog02}
            date="20/7/2001"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde?"
          />
          <Article
            imageUrl={blog03}
            date="20/7/2001"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde?"
          />
          <Article
            imageUrl={blog04}
            date="20/7/2001"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde?"
          />
          <Article
            imageUrl={blog05}
            date="20/7/2001"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
