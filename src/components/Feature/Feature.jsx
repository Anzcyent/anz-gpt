import React from "react";
import "./Feature.scss";

const Feature = ({ title, text }) => {
  return (
    <div className="feature-el">
      <div className="feature-el-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-el-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
