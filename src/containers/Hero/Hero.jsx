import React from "react";
import "./Hero.scss";

const Header = () => {
  return (
    <div className="hero padding" id="home">
      <div className="container">
        <div className="content">
          <h1 className="gradient_text">
            Let's Build Something amazing with GPT Open AI
          </h1>
          <p>
            Welcome to GPT, the ultimate companion for all your conversational
            needs. Harnessing the boundless potential of artificial
            intelligence, ChatGPT is here to assist you in unraveling the
            mysteries of the world, answering your questions, and engaging in
            meaningful exchanges.
          </p>

          <div className="input-area">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          <div className="people">
            <img src="assets/people.png" alt="people" />
            <p>1.600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className="hero-image">
          <img src="assets/ai.png" alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
