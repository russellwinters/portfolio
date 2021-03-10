import React from 'react';
import { createGlobalStyle } from 'styled-components';

const BlogPostStyle = createGlobalStyle`
    main.blog__main {
        width: calc(100vw - (100vw - 100%));
        height: calc(100vh - 80px);
    }

    section.blog__section {
        width: 84vw;
        height: calc(100vh - 80px);
        margin: 0 auto; 
        background-color: #ECF0D6;
    } 

    a.blog__homeButton {
        margin-top: 16px;
        text-decoration: none;
    }

    h2.blog__heading {
        width: 100%;
        text-align: center;
        font-size: 3rem;
        padding-top: 16px;
        margin-bottom: 36px;
        color: #352A2D;
        text-decoration: underline;
    }

    p.blog__text {
        margin: 0 auto;
        margin-bottom: 24px;
        font-size: 1rem;
        line-height: 1.25rem;
        color: #352A2D;
        text-indent: 2rem;
        max-width: 650px;   
        padding: 0 8px;
    }

    div.blog__signoff {
        margin-left: 60%;
        padding: 16px 0px;
    }

    @media only screen and (min-width: 768px) {
        section.blog__section {
            width: 64%;
        }

    }

`;

const BlogGlobalStyles = ({ children }) => {
  return (
    <React.Fragment>
      <BlogPostStyle />
      {children}
    </React.Fragment>
  );
};

export default BlogGlobalStyles;
