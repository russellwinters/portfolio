import React from 'react';
import styled from 'styled-components';
import Github from '../../Assets/github.png';
import LinkedIn from '../../Assets/linkedin.png';

const CONTAINER = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IMG = styled.img`
  width: 36px;
  height: 36px;
  margin: 8px;
`;

const TEXT = styled.p`
  text-align: center;
  padding: 24px;
  font-weight: 700;
  border-top: 1px solid #352a2d;
`;

const SocialShares = () => {
  return (
    <React.Fragment>
      <TEXT>Or you can find my work on Github and contact me through LinkedIn</TEXT>
      <CONTAINER>
        <a href="https://github.com/russellwinters">
          <IMG src={Github} alt="Github Link" />
        </a>
        <a href="https://www.linkedin.com/in/russell-winters/">
          <IMG src={LinkedIn} alt="LinkedIn Link" />
        </a>
      </CONTAINER>
    </React.Fragment>
  );
};

export default SocialShares;
