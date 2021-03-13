import React from 'react';
import styled from 'styled-components';

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const INPUT_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 75%;
  color: #352a2d;
`;

const INPUT = styled.input`
  padding: 4px 8px;
  margin: 8px 0px;
  border: 2px solid #352a2d;
  border-radius: 4px;
  line-height: 1.75rem;
  font-size: 1.1rem;
  background-color: rgba(236, 240, 214, 0.2);
  font-weight: 700;
  color: #352a2d;

  &::placeholder {
    color: #352a2d;
  }
`;

const TEXTAREA = styled.textarea`
  padding: 4px 8px;
  margin: 8px 0px;
  border: 2px solid #352a2d;
  border-radius: 4px;
  line-height: 1.75rem;
  font-size: 1.2rem;
  resize: none;
  background-color: rgba(236, 240, 214, 0.2);
  color: #352a2d;

  &::placeholder {
    color: #352a2d;
    font-weight: 700;
  }
`;

const BUTTON = styled.button`
  padding: 12px 36px;
  border: 2px solid #352a2d;
  border-radius: 24px;
  font-size: 1.3rem;
  font-weight: 900;
  background-color: rgba(236, 240, 214, 0.2);
  color: #352a2d;
  margin-top: 16px;
`;

const ContactForm = () => {
  return (
    <React.Fragment>
      <FORM action="https://formspree.io/f/xdopqeaw" method="POST">
        <INPUT_CONTAINER>
          <INPUT type="text" name="name" placeholder="Name" />
        </INPUT_CONTAINER>
        <INPUT_CONTAINER>
          <INPUT type="email" name="email" placeholder="Email" />
        </INPUT_CONTAINER>

        <INPUT_CONTAINER>
          <TEXTAREA name="message" placeholder="Have something to tell me? Write it here..." />
        </INPUT_CONTAINER>
        <BUTTON type="submit">Submit</BUTTON>
      </FORM>
    </React.Fragment>
  );
};

export default ContactForm;
