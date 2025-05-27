import "./about.css";
import { useState } from "react";

function About() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <>
      <div className="aboutContainer">
        <div className="splitLeft">
          <h1>Elias</h1>
          <p>
            Elias grew up in Stockholm on Södermalm etc etc etc.
            {showLeft && " He loved music growing up..."}
          </p>
          <button className="btnAbout" onClick={() => setShowLeft(!showLeft)}>
            {showLeft ? "Read less" : "Read more"}
          </button>
        </div>
        <div className="splitRight">
          <h1>Vide</h1>
          <p>
            Vide grew up in Uppsala etc etc etc...
            {showRight && " He aspired to be a great guitar player..."}
          </p>
          <button className="btnAbout" onClick={() => setShowRight(!showRight)}>
            {showRight ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
      {/* placeholder för bilder & info om elias + vide */}
    </>
  );
}

export default About;
