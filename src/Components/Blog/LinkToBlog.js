import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CARD = styled.section`
  width: 80%;
  max-width: 650px;
  margin: 24px auto;
  padding: 24px 16px;
  border: 2px solid #352a2d;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 5px #352a2d;

  &:hover {
    box-shadow: 5px 5px 20px 10px #352a2d;
  }
`;

const TITLE = styled.h3`
  font-size: 1.5rem;
`;

const METADATA = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px 0px;
`;

const DESCRIPTION = styled.p`
  margin: 16px 0 0 0;
`;

export const LinkToBlog = ({ route, title, date, description }) => {
  return (
    <CARD>
      <TITLE>{title}</TITLE>

      {/* <p className="blog__text">{description}</p> */}
      <DESCRIPTION>{description}</DESCRIPTION>

      <METADATA>
        <Link to={route}>Read Post...</Link>

        <span>{date}</span>
      </METADATA>
    </CARD>
  );
};

export default LinkToBlog;
