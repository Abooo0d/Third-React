import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let`s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          corrupti, et nostrum quas temporibus dolor fugit aliquid optio
          deserunt doloremque cupiditate blanditiis saepe officia! Dignissimos
          animi minus architecto ratione nulla voluptates sunt dolores quo,
          delectus dolorem perferendis, facilis tempore possimus.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" placeholder="Your Email Address" id="" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
