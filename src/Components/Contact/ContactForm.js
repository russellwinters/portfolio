import React from 'react';
import styled from 'styled-components';

const FORM = styled.form`
  display: flex;
  flec-direction: column;
`;

const ContactForm = () => {
  return (
    <React.Fragment>
      <form action="https://formspree.io/f/xdopqeaw" method="POST">
        <div>
          <label>Name: </label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" placeholder="Email" />
        </div>

        <div>
          <label>Message: </label>
          <textarea name="message" placeholder="Have something to say? Write it here..." />
        </div>
        <button type="submit">Send</button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
