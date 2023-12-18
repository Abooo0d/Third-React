import React from "react";
import "./WhatGP3.css";
import { Feature } from "../../Components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="WhatIsGpt3"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium laborum quia pariatur. Vitae, veniam iste culpa quod provident quae molestias eum ducimus, iusto fugit delectus quis! Perferendis deserunt, corporis consectetur dicta accusamus earum enim distinctio illum tenetur labore ex nostrum?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities Are Beyond Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias possimus a corporis culpa cumque ea illum obcaecati? Odio, ipsam."
        />
        <Feature
          title="KnowledgeBase"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias possimus a corporis culpa cumque ea illum obcaecati? Odio, ipsam."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestias possimus a corporis culpa cumque ea illum obcaecati? Odio, ipsam."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
