import React from 'react';
import { createGlobalStyle } from 'styled-components';

const ContactPageStyles = createGlobalStyle`
    section.main__content {
        width: 100%;
        height: calc(100vh - 80px );
        margin: 0 auto;
        padding: 0 10%;
      }

    h3 {
      padding-top: 36px;
      margin-bottom: 36px;
      font-size: 2rem;
      width: 100%;
      text-decoration: underline;
      text-align: center;
      color: #352a2d;
    }

    @media only screen and (min-width: 768px) {
        section.main__content {
            padding: 0 23%;
        }
`;

const ContactGlobalStyles = ({ children }) => {
  return (
    <React.Fragment>
      <ContactPageStyles />
      {children}
    </React.Fragment>
  );
};

export default ContactGlobalStyles;
