import React from "react";

import MailChimp from "./MailChimp";
import SignUp from "./SignUp";
import Copyright from "./Copyright";

import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <MailChimp />
      <SignUp />
      <p className="contact-footer">
        <a href="mailto:info@coremove.nl">
          <FontAwesomeIcon
            className="contact-icon"
            icon={faEnvelope}
            size="1x"
          />
          info@coremove.nl -
        </a>
        <a href="tel:0031618756511">
          <FontAwesomeIcon
            className="contact-icon"
            icon={faPhoneAlt}
            size="1x"
          />
          0618756511
        </a>
      </p>
      <Copyright />
    </div>
  );
};

export default Footer;
