import React from 'react';
import Header from '../Components/Header';
import { Router, Link } from '@reach/router';
import FirstPost from './BlogPosts/FirstPost';
import BlogHome from './BlogPosts/BlogHome';
import SummerExcitement from './BlogPosts/SummerExcitement';
import Goals from './BlogPosts/Goals';
import ImposterSyndrome from './BlogPosts/ImposterSyndrome';

const Blog = () => {
  return (
    <>
      <Header />
      <section>
        <Router>
          <BlogHome path="/blog" />
          <FirstPost path="/blog/hello-world" />
          <SummerExcitement path="/blog/summer-excitement" />
          <Goals path="/blog/newyears-goals" />
          <ImposterSyndrome path="/blog/imposter-syndrome" />
        </Router>
      </section>
    </>
  );
};

export default Blog;
