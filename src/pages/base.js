import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";

import base from "../images/intro-core.jpeg";

import "../styles/base.css";

const BasePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - Base </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <link rel="canonical" href="https://www.coremove.nl/base" />
      </Helmet>
      <Layout>
        <div className="content">
          <h2>Core • Base</h2>
          <div className="detail-info">
            <div className="detail-img-div">
              <img src={base} alt="base" className="detail-img" />
            </div>
            <div className="detail-text">
              <p>
                Ervaar je klachten tijdens het bewegen? Wil je graag sporten
                maar lukt het niet om je draai te vinden in de sportschool? Laat
                mij helpen. Ik kan je laten zien hoe je in korte tijd de kracht
                in je lijf weer terug kunt vinden. Waardoor klachten afnemen en
                het bewegen of sporten weer makkelijke gaat en je je weer fit
                zult of kunt voelen. Afvallen is niet mijn doel, eerder een
                gewenst side-effect. Als je fit bent zul je ervaren dat een
                gezonde levensstijl echt geen moeilijk verhaal is en dat je kunt
                vinden en ervaren wat bij jouw levensstijl en ritme aansluit.
              </p>
              <p>
                In onze huidige samenleving zitten we te veel. Dit hebben we
                allemaal wel een keer gehoord. Een of twee uur in de sportschool
                per week zet vaak maar even of niet genoeg zoden aan de dijk.
                Men krijgt niet de juiste begeleiding waardoor klachten ontstaan
                en dat demotiveert om te bewegen. Daarbij komt dat als je een
                inactieve leefstijl hebt, 1 keer per week naar de sportschool
                juist een grotere kans geeft op blessures. en dus het effect uit
                zal blijven.
              </p>
            </div>
          </div>
          <div>
            <p>
              Een inactieve levensstijl wordt helaas bijna met de paplepel
              ingegoten tegenwoordig. Inactiviteit begint al op school met het
              vele zitten. 55% van onze kinderen van 0 tot en met 18 jaar halen
              de bewegingsnorm NIET. Dit bestaat uit een uurtje bewegen per dag
              wat meer dan de helft van onze kinderen (dus ook baby’s, peuters
              en kleuters al) niet haalt. Persoonlijk gaat me dit erg aan het
              hart. De gevolgen van op jonge leeftijd niet genoeg bewegen zijn
              immens. Van de heftige gevolgen zoals onder andere obesitas met
              alle gevolgen van dien - diabetes type2 op jonge leeftijd, tot het
              niet goed ontwikkelen van de motoriek wat op fysiek en psychisch
              gebied negatieve gevolgen kan hebben. Niet alles is omkeerbaar.
              Maar de regel geldt; bewegen is goed - meer bewegen is beter. Op
              welke leeftijd dan ook. Het is nooit te laat om te starten. Kijk
              naar het bewegen als één geheel. Wat heeft jouw lijf nodig? Bij de
              eerste intake wordt hier een plaatje van gemaakt. Er wordt onder
              andere gekeken naar:
            </p>
          </div>
          <ul>
            <li>je dagelijkse bewegen </li>
            <li>kracht</li>
            <li>stabiliteit van o.a. de core</li>
            <li>coördinatie van o.a. de core</li>
            <li>lenigheid</li>
            <li>fascie (aanwezigheid van myofasciale beperking)</li>
            <li>
              eventueel aanwezige klachten. (Bij sommige klachten is misschien
              (eerst) meer expertise nodig, dan stuur ik altijd door)
            </li>
          </ul>
          <p>
            Vanuit daar wordt er een bewegingsplan opgesteld en worden de
            technieken aangeleerd. Een bewegingsplan maken we samen. Zodat we er
            op een duurzame manier voor zorgen dat het blijvend is. De volgende
            plannen zijn mogelijk:
          </p>

          <ul>
            <li>
              gratis screening - status preasens -
              kracht/stabiliteit/coördinatie/algeheel bewegen.
            </li>
            <li>eenmalige cursus</li>
            <li>6 weekse cursus - 2 trainmomenten per week</li>
            <li>12 weekse cursus - 2 trainmomenten per week</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default BasePage;
