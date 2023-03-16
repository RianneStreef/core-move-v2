import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";

import Reviews from "../components/Reviews.jsx";

import "../styles/index.css";

import base from "../images/intro-core.jpeg";
import mama from "../images/intro-mama.jpeg";
import work from "../images/intro-werk.jpeg";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move - Home </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Learn how to adjust • implement in your daily routine • feel the difference"
        />
        <meta
          name="keywords"
          content="Core, Fysio therapie, Den Haag, balans, mama, moeder, houding"
        />
        <link rel="canonical" href="https://www.coremove.nl/" />
      </Helmet>
      <Layout>
        <div className="content">
          <div className="intro-paragraph">
            <h2>Activate your inner strength.</h2>
            <p>
              Mijn verbazing is nog altijd groot als ik terug kijk. In de
              fysiotherapie kwam ik alledaagse klachten tegen maar al snel kwam
              ik er achter dat de nek en rugklachten maar ook heup/knie en
              schouder/pols klachten bijna altijd te relateren zijn aan een
              inactieve leefstijl of inactiviteit door bijvoorbeeld kantoorwerk.
              30 minuten achter elkaar bewegen per dag is de beweegnorm. Cijfers
              laten zien dat 45% daar maar aan voldoet — je lichaam vergeet hoe
              te bewegen door te weinig bewegen. Vaak al op jonge leeftijd door
              het vele zitten op school. Door training en tips op maat kun je
              preventief te werk gaan. Zorgen voor een persoonlijk
              fitheidsniveau waar je echt verder op kunt borduren. En voor de
              volgende valkuil weten wat je kunt doen. Doel is om je eigen
              therapeut te worden en te leren aanvoelen wat jouw lijf nodig
              heeft.
            </p>
          </div>
          <div className="intro intro-base">
            <div className="intro-img">
              <img src={base} alt="base" />
            </div>
            <div className="intro-text">
              <h3>core • base</h3>
              <h4>preventie • stabiliteit • functionaliteit • training</h4>
              <p>
                Je lichaam is gemaakt om te bewegen. Door teveel aan
                inactiviteit kan het lichaam ‘vergeten’ hoe te bewegen. Door
                middel van de juiste combinatie van aanspannen, ontspannen,
                rekken en doorbloeden kun je dat omkeren. Het is geen
                rocket-sience. Let me show you how. Voor een duurzame
                verandering.
              </p>
              <div className="button-container">
                <Link to="/base/" className="button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="intro intro-mama">
            <div className="intro-text">
              <h3>core • mama</h3>
              <h4>Rebuild core & pelvic floor</h4>
              <p>
                Post-natale training op maat specifiek voor de core voor mama’s.
                Iedere nieuwe mama moet dit zichzelf gunnen! Het voorkomt
                klachten en zorgt dat jij op een goede manier goed en fit wordt.
              </p>
              <div className="button-container">
                <Link to="/mama/" className="button">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="intro-img">
              <img src={mama} alt="mama" />
            </div>
          </div>
          <div className="intro intro-work">
            <div className="intro-img">
              <img src={work} alt="work" />
            </div>
            <div className="intro-text">
              <h3>core • work</h3>
              <h4>workspace - physical health coaching</h4>
              <p>
                Inactiviteit of een inactieve houding is een grote oorzaak voor
                langdurige klachten. Achter de computer in de juiste houding,
                hoe ziet dat er uit en hoe moet dat voelen? Plan je genoeg
                beweging in tussendoor? Hoe en wat kun je doen om dat te
                implementeren in je dagelijkse werkleven? let us help;
                oefeningen, tips en houdingcorrecties op maat voor jou! Thuis of
                op kantoor. Persoonlijk plan voor iedereen.
              </p>
              <div className="button-container">
                <Link to="/mama/" className="button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
