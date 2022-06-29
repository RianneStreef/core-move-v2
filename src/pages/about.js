import React from "react";

import Layout from "../components/Layout.jsx";
import { Helmet } from "react-helmet";

import maxime from "../images/maxime.jpeg";

import "../styles/about.css";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - About </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <link rel="canonical" href="https://www.coremove.nl/about" />
      </Helmet>
      <Layout>
        <div className="content">
          <h2>About me</h2>
          <div className="detail-info">
            <div className="detail-text">
              <p>
                Bewegen fascineert me. Hoe we bewegen. Wat ons beweegt. Waarom
                we bewegen. En waarom we, in deze huidige samenleving, te weinig
                bewegen.
              </p>
              <p>
                Mijn naam is Maxime. De opleiding fysiotherapie heeft me veel
                geleerd. Maar me nog meer aan het denken gezet. Waarom maken we
                de keuzes die we maken qua bewegen. En waar ligt de oorsprong
                van bepaalde klachten met betrekking tot beweging. Er valt hier
                op zo veel vlakken wat te winnen. Voor onszelf, en voor onze
                kinderen. Ik verdiep me in yoga, pilates, stabiliteit en
                krachttrainingsvormen, post en prenatale training en
                bekkenbodemtherapie.
              </p>
              <p>
                Ik ben mama van 2 kids. En sinds ik twee kleintjes heb kan ik
                niet stoppen met vol verbazing kijken naar hoe zij leren en
                gaan. Van nature. Vanzelf. Het is fantastisch! Het leert mij dat
                een lichaam gemaakt is om te leren en om te bewegen. Nu, zeker
                met mijn tweede kindje die ontzettend veel beweging vraagt en
                nodig heeft, merk ik pas hoe onmogelijk het eigelijk is om je
                lichamelijk en motorisch goed te ontwikkelen in deze tijd. Het
                gaat vanzelf, alleen is onze omgeving dermate veranderd dat ik
                mezelf te veel hoor zeggen (tegen mijn 1-jarige) ; niet klimmen,
                kijk uit, pas op, niet zelf de trap op.. Ik realiseer me dat ik
                eigelijk de hele dag bezig om hem te remmen.. Dit moet en kan
                anders.
              </p>
            </div>
            <div className="detail-img-div">
              <img src={maxime} alt="base" className="maxime" />
            </div>
          </div>
          <div className="padding">
            <p>
              Dit is op microniveau en in de basis wat er, in mijn beleving, in
              de samenleving gebeurt. Op de een of andere manier hebben we een
              ritme van inactiviteit gecreëerd en ons zorgstelsel is gebouwd op
              het fiksen van de gevolgen van die inactiviteit in plaats van de
              inactiviteit zelf aan te pakken. Daar wil ik in deze vorm niet
              meer aan mee doen. Vanuit die passie en onmacht in mijn huidige
              kunnen is Core•Move ontstaan. Met de juiste knowledge wil ik
              mensen motiveren en leren. Ook mezelf blijven uitdagen en blijven
              ontwikkelen op mijn manier. Ik krijg op deze manier enorm veel
              voldoening en energie door mijn werk!
            </p>
            <p>
              Ik woon en werk in Scheveningen. Al mijn hele leven. Zout bloed
              stroomt door mijn lijf. Ik hou van het strand en de duinen vooral
              in de lente en herfst. De mogelijkheid om op het strand of in de
              duinen te trainen is er dus zeker!
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutPage;
