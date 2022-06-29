import React from "react";
import { Link } from "gatsby";

import "../styles/Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>Copyright Core Move. Alle rechten voorbehouden.</p>
      <p className="legal">
        Foto's zijn niet contractueel - <Link to="/legal">Disclaimer</Link>
      </p>
      <p className="rs">
        Created by: Rianne -
        <a href="http://www.vts-webdesign.com" target="blank">
          <b>VTS-webdesign</b>
        </a>
      </p>
    </div>
  );
};

export default Copyright;
