import React from 'react';
import styled from 'styled-components';
import Github from '../../Assets/github.png';
import LinkedIn from '../../Assets/linkedin.png';

const CONTAINER = styled.section`
  width: 100%;
`;

const IMG = styled.img`
  width: 36px;
  height: 36px;
  margin: 8px;
`;

const SocialShares = () => {
  return (
    <CONTAINER>
      <a href="https://github.com/russellwinters">
        <IMG src={Github} alt="Github Link" />
      </a>
      <a href="https://www.linkedin.com/in/russell-winters/">
        <IMG src={LinkedIn} alt="LinkedIn Link" />
      </a>
    </CONTAINER>
  );
};

export default SocialShares;
