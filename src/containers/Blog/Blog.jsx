import React from "react";
import "./Blog.scss";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="blog padding" id="blog">
      <div className="container">
        <div className="heading">
          <h1 className="gradient_text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="content">
          <div className="groupA">
            <Article
              imgUrl="assets/blogs/blog01.png"
              date="June 11, 2023"
              title="Unleashing the Power of GPT: Exploring its Language Generation Capabilities"
            />
          </div>
          <div className="groupB">
            <Article
              imgUrl="assets/blogs/blog02.png"
              date="June 11, 2023"
              title="GPT's Impact on Natural Language Understanding and Conversational AI"
            />
            <Article
              imgUrl="assets/blogs/blog03.png"
              date="June 11, 2023"
              title="Ethical Considerations in Deploying GPT: Navigating Bias and Misinformation"
            />
            <Article
              imgUrl="assets/blogs/blog04.png"
              date="June 11, 2023"
              title="Transforming Education with GPT: AI as a Personalized Tutor"
            />
            <Article
              imgUrl="assets/blogs/blog05.png"
              date="June 11, 2023"
              title="GPT and the Future of Human-Computer Interaction: Conversing with AI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
