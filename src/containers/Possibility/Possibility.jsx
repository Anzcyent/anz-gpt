import React from "react";
import "./Possibility.scss";

const Possibility = () => {
  return (
    <div className="possibility padding" id="possibility">
      <div className="container">
        <div className="possibility-image">
          <img src="assets/possibility-image.png" alt="possibility-image" />
        </div>
        <div className="content">
          <h4>Request Erly Access to Get Started</h4>
          <h1 className="gradient_text">
            The possibilities are beyond your imagination
          </h1>
          <p>
            GPT possesses remarkable capabilities in natural language processing
            and generation. With its vast training on diverse text sources, GPT
            has the ability to understand and generate human-like text across a
            wide range of topics.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
