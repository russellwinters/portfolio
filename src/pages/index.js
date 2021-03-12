import * as React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import MainTextGlobalStyles from '../Components/About/AboutTextGlobalStyles';
import BackgroundImage from '../Assets/homepage.jpeg';
import '../styles/app.css';

const TITLE = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(53, 42, 45, 1);
  text-align: center;
  margin-top: 20vh;
`;

const TEXT = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(53, 42, 45, 1);
  text-align: center;
  margin-top: 24px;
`;

const TEXT_CONTAINER = styled.div`
  margin-top: 10vh;
`;

const IndexPage = () => {
  return (
    <body>
      <MainTextGlobalStyles />
      <Header />
      <main className="main__content">
        <img className="background__image" src={BackgroundImage} alt="background__image" />
        <TITLE>Hi, I'm Russell.</TITLE>
        <TEXT_CONTAINER>
          <TEXT>I'm a Full-Stack Web Developer from Vancouver, BC.</TEXT>
          <TEXT>I primarily work with JS/TS, Node.js, React, Express, and MongoDB.</TEXT>
          <TEXT>I use Github, AWS, Heroku, Netlify, Cypress, Jest, and SCSS frequently.</TEXT>
          <TEXT>I do a lot outside of my dev work :)</TEXT>
        </TEXT_CONTAINER>
      </main>
    </body>
  );
};

export default IndexPage;
