import React from "react";

import "../styles/PupUp.css";

const PopUp = (props) => {
  let { isOpen, setIsOpen, handlePopUp } = props;

  return (
    <div className="popup-box">
      <div className="box">
        <div>
          <span className="close-icon" onClick={() => handlePopUp(false)}>
            x
          </span>
          <h2>Core • Base</h2>

          <p>
            Ervaar je klachten tijdens het bewegen? Wil je graag sporten maar
            lukt het niet om je draai te vinden in de sportschool? Laat mij
            helpen. Ik kan je laten zien hoe je in korte tijd de kracht in je
            lijf weer terug kunt vinden. Waardoor klachten afnemen en het
            bewegen of sporten weer makkelijke gaat en je je weer fit zult of
            kunt voelen. Afvallen is niet mijn doel, eerder een gewenst
            side-effect. Als je fit bent zul je ervaren dat een gezonde
            levensstijl echt geen moeilijk verhaal is en dat je kunt vinden en
            ervaren wat bij jouw levensstijl en ritme aansluit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
