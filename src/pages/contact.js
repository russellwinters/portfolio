import React from 'react';
import ContactGlobalStyles from '../Components/Contact/ContactGlobalStyles';
import ContactForm from '../Components/Contact/ContactForm';
import Header from '../Components/Header';
import SocialShares from '../Components/Contact/SocialShares';

const Contact = () => {
  return (
    <>
      <Header />
      <ContactGlobalStyles />
      <section className="main__content">
        <h3>Contact Me</h3>

        <div>
          <p>Find my work on Github or contact me through LinkedIn</p>
          <SocialShares />
        </div>

        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
