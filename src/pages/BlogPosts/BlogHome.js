import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogGlobalStyles from '../../Components/Blog/BlogGlobalStyles';
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
    <React.Fragment>
      <BlogGlobalStyles />
      <main className="blog__main">
        <section className="blog__section hide-scrollbar__blog">
          <h2 className="blog__heading">foundBlog && read()</h2>

          {RENDER_LINKS}
        </section>
      </main>
    </React.Fragment>
  );
};

export default BlogHome;
