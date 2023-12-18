import React from "react";
import "./Features.css";
import { Feature } from "../../Components";
const Features = () => {
  const featuresData = [
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future Is Now And Yo uJust Need To Realize It,Step Into Future
          Today & Make It Happen
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="gbt3__features-container">
        {featuresData.map((data, index) => (
          <Feature title={data.title} text={data.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
