import React from "react";
import "./blog_Home.css";
import { useTheme } from "../../Utils/theme-context";

const BlogHome: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <div className={`box-container ${theme}`}>
        <h2>Blog</h2>
        <div className="boxes">
          <div className={`box ${theme}`}>
            <h1>Making a design system from scratch</h1>
            <div className="box-info">
              <h2>12 Feb 2030</h2>
              <h2>Design, Pattern</h2>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={`box ${theme}`}>
            <h1>Creating pixel perfect icons in Figma</h1>
            <div className="box-info">
              <h2>12 Feb 2030</h2>
              <h2>Figma, Icon Design</h2>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;