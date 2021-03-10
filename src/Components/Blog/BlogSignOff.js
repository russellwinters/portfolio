import React from "react";

const BlogSignOff = ({ timestamp }) => {
  return (
    <div className="blog__signoff">
      <p> - Russell Winters</p>
      <p>{timestamp}</p>
    </div>
  );
};

export default BlogSignOff;
