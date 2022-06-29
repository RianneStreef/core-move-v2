import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import "../styles/MailChimp.css";

function MailChimp() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    console.log("sending to MailChimp");
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <div className="subscribe-component">
      {submitted ? (
        <form className="subscribe">
          <div>
            <h2>Je inschrijving is geregistreerd!</h2>
            <p>Dank je wel voor je intresse.</p>
          </div>
        </form>
      ) : (
        <form>
          <div>
            <p className="subscribe-text">
              Wil op graag op de hoogte gehouden worden? Schrijf je nu in voor
              de nieuwsbrief en kom in aanmerking voor korting en win-acties.
            </p>
          </div>
          <div>
            <input
              className="subscribe-input"
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder="Email adres"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="button-container">
              <button
                type="button"
                aria-label="Subscribe"
                onClick={() => handleSubmit()}
                className="button"
              >
                Inschrijven
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default MailChimp;
