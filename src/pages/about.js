import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../Components/Header';
import Carousel from '../Components/About/Carousel';
import MainTextGlobalStyles from '../Components/About/AboutTextGlobalStyles';
import BackgroundImage from '../Assets/homepage.jpeg';
import '../styles/app.css';

const About = () => {
  return (
    <body>
      <MainTextGlobalStyles />
      <Header />
      <main className="main__content">
        <img className="background__image" src={BackgroundImage} alt="background__image" />
        <section className="text__block">
          <h1 className="text__heading">Homepage</h1>
          <p className="inner__text">
            Hello! That page is maintained and developed by Russell Winters. I am a Web Developer based out of
            Vancouver, BC. I grew up on Long Island, New York and went to University at Queen's University in Kingston,
            Ontario. I grew up playing tons of basketball, which is what helped me choose Queen's over a number of other
            Universities. I like reading and writing, which helps explain my History/English undergrad degree. That
            being said, I moved to the tech industry because I love learning - as it is a clear means to personal growth
            - and this industry is famed for how fast it moves and how everyone is constantly 'learning new things'. The
            continuous learning really sold me on Web Development, and I've loved the logical thinking, creativity, and
            problem solving skills that are required to develop great work!
          </p>

          <div className="image__container">
            <Carousel />
          </div>

          <p className="inner__text">
            As you can see above, a few of my passions are the outdoors -- HELLO B.C., this is a world away from the
            sandbar I grew up on (no hate intended, LI has its redeming qualities) -- and sports, name a sport and I
            probably follow it - except Hockey. This website is NOT a development portfolio (if you really need, you can
            find my resume on the{' '}
            <Link to="/about" className="text__link">
              About Me
            </Link>{' '}
            page) - instead it's a personal website. I'm hoping to use it as a space to write more, although writing has
            never been a habit I've been able to form - whether over blog or journaling. We'll see if anything's
            changed.
          </p>
          <p className="inner__text">
            Oh right, I guess the last thing this page is for is to mess around with Gatsby.js and any other libraries
            I'm interested in. As I'm writing this, still in development, I've touched on styled components and Gatsby
            (obviosuly) - I'm enjoying both! I like how styled components allow for a much more clear organization of
            components and their styled -- something that is a challenge on bigger projects I've seen while using SCSS.
            I've really liked Gatsby too, I find the developer experience great although that view may be tainted by my
            familiarity with React.
          </p>
        </section>
      </main>
    </body>
  );
};

export default About;
