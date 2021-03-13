import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CARD = styled.section`
  width: 80%;
  max-width: 650px;
  margin: 24px auto;
  padding: 24px 16px;
  border: 4px solid #352a2d;
  border-radius: 8px;
  // background-color: #ecf0d6;
  background-color: rgba(236, 240, 214, 0.2);
  box-shadow: 2px 2px 8px 5px rgba(236, 240, 214, 0.6);

  &:hover {
    box-shadow: 5px 5px 20px 10px rgba(236, 240, 214, 0.6);
  }
`;

const TITLE = styled.h3`
  font-size: 1.5rem;
  color: #352a2d;
  font-weight: 700;
`;

const METADATA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 0px;
  color: #352a2d;
  font-weight: 600;

  & a {
    color: #352a2d;
    text-decoration: underline;
    font-weight: 700;
  }
`;

const DESCRIPTION = styled.p`
  margin: 16px 0 0 0;
  color: #352a2d;
  font-weight: 600;
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
