import React from "react";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="brand padding">
      <div className="container">
        <div>
          <img src="assets/brands/google.png" alt="google" />
        </div>
        <div>
          <img src="assets/brands/slack.png" alt="slack" />
        </div>
        <div>
          <img src="assets/brands/atlassian.png" alt="atlassian" />
        </div>
        <div>
          <img src="assets/brands/dropbox.png" alt="dropbox" />
        </div>
        <div>
          <img src="assets/brands/shopify.png" alt="shopify" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
