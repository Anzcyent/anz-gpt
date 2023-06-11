import React from "react";
import "./Features.scss";

import { Feature } from "../../components";

const data = [
  {
    id: 1,
    title: "Natural Language Capabilities",
    text: "GPT demonstrates an exceptional ability to understand and produce natural language. It provides realistic and fluent responses to real-time conversations, enabling a natural human interaction experience.",
  },
  {
    id: 2,
    title: "Wide Subject Coverage",
    text: "GPT has a wide range of knowledge on a variety of topics. He can chat with you about history, science, art, technology and more. GPT can help you with a wide range of topics without being tied to a limited subject area.",
  },
  {
    id: 3,
    title: "Personalized Communication",
    text: "GPT offers you a customized communication experience. When interacting with you, it takes into account your preferences, interests and needs. This improves your interactions by providing you with more meaningful and personalized responses.",
  },
  {
    id: 4,
    title: "Continuous Learning",
    text: "GPT learns and improves from each interaction. By evaluating feedback and user interactions, it constantly updates and improves itself to provide a better service.",
  },
];

const Features = () => {
  return (
    <div className="features padding" id="features">
      <div className="container">
        <div className="heading">
          <h1 className="gradient_text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="extra">
          {data.map((item) => (
            <Feature key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
