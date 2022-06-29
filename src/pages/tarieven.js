import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";

const TarievenPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - Tarieven </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <link rel="canonical" href="https://www.coremove.nl/tarieven" />
      </Helmet>
      <Layout>
        <div className="content">
          <h2>Tarieven</h2>
          <h3>Core•Mama en Core•Base</h3>
          <p>6 weekse training €45,50 per sessie 2x per week</p>
          <p>
            Voor nu kom ik aan huis, of we trainen buiten. Ik heb ook eventueel
            een ruimte waar we terecht kunnen. Buiten Den Haag geldt een toeslag
            voor reiskosten.
          </p>
          <h3>Core • Work</h3>
          <p>Training per medewerker €35</p>
          <p>per 10 medewerkers 10% korting</p>
        </div>
      </Layout>
    </div>
  );
};

export default TarievenPage;
