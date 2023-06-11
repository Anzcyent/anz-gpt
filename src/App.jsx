import React from "react";
import "./App.scss";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Hero,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Hero />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
