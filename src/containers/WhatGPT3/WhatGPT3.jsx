import React from "react";
import "./WhatGPT3.scss";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 margin" id="whatisgpt">
      <div className="container gradient_bg">
        <div className="feature">
          <Feature
            title="What is GPT-3"
            text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. It represents a significant breakthrough in natural language processing and artificial intelligence. With a staggering 175 billion parameters, GPT-3 possesses an extraordinary ability to understand, generate, and even translate human language."
          />
        </div>
        <div className="heading">
          <h1 className="gradient_text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="extra">
          <Feature
            title="Chatbots"
            text="Chatbots are intelligent virtual assistants designed to simulate human-like conversations. Powered by artificial intelligence algorithms, chatbots are capable of understanding and responding to natural language inputs."
          />
          <Feature
            title="Knowledgebase"
            text="A knowledge base is a centralized repository of information that stores and organizes knowledge within an organization or for public use. It serves as a valuable resource for storing and retrieving information, allowing users to access relevant knowledge quickly and efficiently. "
          />
          <Feature
            title="Education"
            text="GPT-3, the powerful language model developed by OpenAI, has the potential to revolutionize education in numerous ways. With its advanced natural language processing capabilities and vast knowledge base, GPT-3 can serve as an intelligent educational tool. "
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
