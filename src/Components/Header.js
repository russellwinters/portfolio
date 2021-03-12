import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HEADER = styled.header`
  width: calc(100vw - (100vw - 100%));
  background-color: #352a2d;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8%;
  height: 80px;
  opacity: 0.9;
`;

const LinkSpan = styled.span`
  color: #ecf0d6;
`;

const HOMELINK = styled.h3`
  color: #ecf0d6;
`;

const NAV = styled.nav`
  width: 15%;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HEADER>
      <Link to="/">
        <HOMELINK>russellWinters;</HOMELINK>
      </Link>
      <NAV>
        <Link to="/blog">
          <LinkSpan>Blog</LinkSpan>
        </Link>
        <Link to="/about">
          <LinkSpan>About</LinkSpan>
        </Link>
        <Link to="/contact">
          <LinkSpan>Contact</LinkSpan>
        </Link>
      </NAV>
    </HEADER>
  );
};

export default Header;
