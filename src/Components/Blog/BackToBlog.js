import React from "react";
import { Link } from "gatsby";

const BackToBlog = () => {
  return (
    <Link to="/blog" className="blog__homeButton">
      Blog Home
    </Link>
  );
};

export default BackToBlog;
