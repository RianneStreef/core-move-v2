import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";

const WorkPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - Work </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <link rel="canonical" href="https://www.coremove.nl/work" />
      </Helmet>
      <Layout>
        <div className="content">
          <h2>Core • Work</h2>
          <p>
            Dat we allemaal te veel zitten is nu wel duidelijk. Maar wat kunnen
            we er aan doen? Wat als je baan nu eenmaal van je vraagt om veel te
            zitten?
          </p>
          <p>
            Er zijn een aantal richtlijnen die je in je dagelijkse leven kunt
            implementeren om ervoor te zorgen dat de schade te minimaliseren.
            Schade klinkt heftig. Maar een half uur zitten, staat gelijk aan 5
            minuten bewegen om de ‘schade in te halen’. Echter bij een uur
            zitten is dat al een half uur bewegen! Laat staan als je 8 uur op
            een dag achter de computer zit. 5 dagen in de week, en thuis gekomen
            met de auto, ploffen we uitgeput neer op de bank. Daar is geen
            lichaam voor gemaakt en eigelijk moet je dit dus zien als
            onzichtbare schade die je toebrengt aan je lichaam. Echter als de
            schade eenmaal zichtbaar wordt, is het proces vaak moeilijk of
            on-omkeerbaar. Vandaar dat preventie hier zo belangrijk is.
          </p>
          <p>
            Een juiste houding is tevens essentieel om verdere blessures te
            voorkomen. Echter valt of staat het bij genoeg bewegen. Maar ook in
            je dagelijkse houding kun je al kleine aanpassingen doen om een
            statische houding tegen te gaan. Kortom; tips, trucs, ontspannings -
            krachtsoefeningen en houdingscorrectie.
          </p>
          <h3>Core • Work - online of op locatie</h3>
          <p>
            Op locatie kan ik persoonlijk maar ook in een groep adviseren en
            corrigeren. Tevens kan ik een traject aanbieden waarbij er samen
            gekeken wordt naar een duurzaam gezond werkklimaat. Dit kan op
            aanvraag.
          </p>
          <p>
            Bij actievere beroepen kan het zijn dat er een vraag is naar een
            juiste houding. Op maat kan ik hierbij een plan maken. Denk aan een
            pedagogische medewerker op een kinderdagverblijf. Ik kan me
            voorstellen dat er vraag is naar wat nu de beste houding is om te
            tillen. Waar moet ik op letten? En welke spieren zou ik daarvoor
            juist moeten trainen of moeten rekken? Denk aan een verkorting in de
            hamstrings waardoor je altijd met gebogen rug moet bukken en dus
            altijd verkeerde spieren in een verkeerde houding belast. En
            uiteraard het aanspannen van de core stabiliteit. Wanneer en hoe
            moet dit? Geen rocket sience en 1x duidelijke uitleg moet al een
            hoop verduidelijking/verlichting geven. Gezonde werknemers zorgen
            uiteraard voor een gezond bedrijf.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default WorkPage;
