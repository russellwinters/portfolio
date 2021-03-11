import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTextGlobalStyles from '../../Components/About/AboutTextGlobalStyles';
import BackgroundImage from '../../Assets/homepage.jpeg';
import LinkToBlog from '../../Components/Blog/LinkToBlog';
import { BlogLinks } from '../../Models/BlogLinks';

const BlogHome = () => {
  const RENDER_LINKS = BlogLinks.reverse().map((singleBlog) => {
    return (
      <React.Fragment key={uuidv4()}>
        <LinkToBlog
          route={singleBlog.route}
          title={singleBlog.title}
          description={singleBlog.description}
          date={singleBlog.date}
        />
      </React.Fragment>
    );
  });

  return (
    <body>
      <MainTextGlobalStyles />
      <img className="background__image" src={BackgroundImage} alt="background__image" />

      <main className="main__content">
        <section className="text__block hide-scrollbar__blog">
          <h1 className="text__heading">foundBlog && read()</h1>

          {RENDER_LINKS}
        </section>
      </main>
    </body>
  );
};

export default BlogHome;
