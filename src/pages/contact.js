import React from 'react';
import MainTextGlobalStyles from '../Components/About/AboutTextGlobalStyles';
import ContactForm from '../Components/Contact/ContactForm';
import Header from '../Components/Header';
import SocialShares from '../Components/Contact/SocialShares';
import BackgroundImage from '../Assets/homepage.jpeg';

const Contact = () => {
  return (
    <body>
      <MainTextGlobalStyles />

      <Header />
      <main className="main__content ">
        <img className="background__image" src={BackgroundImage} alt="background__image" />

        <section className="text__block hide-scrollbar__blog">
          <h1 className="text__heading">Contact Me</h1>

          <ContactForm />
          <SocialShares />
        </section>
      </main>
    </body>
  );
};

export default Contact;
