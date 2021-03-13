import React from 'react';
import { createGlobalStyle } from 'styled-components';

const MainTextStyle = createGlobalStyle`

    section.text__block {
        width: 55vw;
        height: calc(100vh - 80px);
        padding: 16px 2.5vw;
        margin: 0 auto;
        // background-color: #352a2d; //original
        background-color: rgba(236, 240, 214, 0.2);
        // opacity: 0.20;
        // color: #ecf0d6; //original
        color: #352a2d;
        overflow-y: scroll;
        padding-bottom: 112px;
        // border-top: 1px solid #ecf0d6;
    }

    h1.text__heading {
      width: 100%;
      text-align: center;
      font-size: 2.5rem;
      margin-top: 36px;
      margin-bottom: 24px;
      text-decoration: underline;
      font-weight: 700;
      
    }

    p.inner__text {
        margin-top: 8px;
        text-indent: 2rem;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.5rem;
    }

    .image__container {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    a.text__link {
      color: #352a2d;
      text-decoration: underline;
      font-weight: 900;
    }

    a.blog__homeButton {
      margin-top: 16px;
      color: #352a2d;
      font-weight: 700;
      text-decoration: underline; 
  }


`;

const MainTextGlobalStyles = ({ children }) => {
  return (
    <React.Fragment>
      <MainTextStyle />
      {children}
    </React.Fragment>
  );
};

export default MainTextGlobalStyles;
