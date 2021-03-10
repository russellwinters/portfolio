import React from 'react';
import { createGlobalStyle } from 'styled-components';

const MainTextStyle = createGlobalStyle`

    section.text__block {
        width: 55vw;
        padding: 16px 2.5vw;
        margin: 0 auto;
        background-color: #352a2d;
        opacity: 0.75;
        color: #ecf0d6;
    }

    h1.text__heading {
      width: 100%;
      text-align: center;
      font-size: 2.5rem;
      margin-top: 36px;
      margin-bottom: 24px;
      text-decoration: underline;
    }

    p.inner__text {
        margin-top: 8px;
        text-indent: 2rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    .image__container {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    a.text__link {
      color: #ecf0d6;
      text-decoration: underline;
      font-weight: 900;
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
