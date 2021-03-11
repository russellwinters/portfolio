import React from 'react';
import styled from 'styled-components';

const SIGNOFF = styled.div`
  width: 40%;
  margin-left: 55%;
  margin-top: 24px;
`;

const BlogSignOff = ({ timestamp }) => {
  return (
    <SIGNOFF>
      <p> - Russell Winters</p>
      <p>{timestamp}</p>
    </SIGNOFF>
  );
};

export default BlogSignOff;
