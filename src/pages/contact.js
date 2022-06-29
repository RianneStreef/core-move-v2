import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - Contact </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <link rel="canonical" href="https://www.coremove.nl/contact" />
      </Helmet>
      <Layout>
        <div className="content">
          <Contact />
        </div>
      </Layout>
    </div>
  );
};

export default ContactPage;
