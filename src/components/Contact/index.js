import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactP,
  ContactEmail,
  ContactPhone,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactP>Let's Build Something!</ContactP>
      <ContactEmail>julie.yue.2011@gmail.com</ContactEmail>
      <ContactPhone>(1) 512-412-1653</ContactPhone>
    </ContactContainer>
  );
};

export default ContactSection;
