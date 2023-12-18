import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./Possibility.css";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early AccessTo Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities Are Beyond Your Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consequuntur minus, minima commodi in laudantium, totam alias, nostrum
          debitis quam aperiam eaque inventore nesciunt repellendus. Officiis
          quis sapiente totam aliquid. Possimus inventore suscipit odio
          voluptatem, accusamus ratione fugiat dolore quas!
        </p>
        <h4>Request Early AccessTo Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
