import React from "react";

import "../styles/Contact.css";

import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h4>Contact</h4>
        <p>
          Email:{" "}
          <a className="contact-link" href="mailto:info@coremove.nl">
            info@coremove.nl
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a className="contact-link" href="tel:+31618756511">
            0618756511
          </a>
        </p>
      </div>
      <div className="contact-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
