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
        <h1>Contact Me</h1>

        <ContactForm />
        <SocialShares />
      </section>
    </>
  );
};

export default Contact;
