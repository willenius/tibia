import "./about.css";
import { useState } from "react";

function About() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <>
      <div className="aboutContainer">
        <div className="splitLeft">
          <h1>Elias</h1>
          <p>
            Elias grew up in Stockholm on Södermalm etc etc etc.
            {hoverLeft && " He loved music growing up..."}
          </p>
          <button className="btnAbout" onMouseEnter={() => setHoverLeft(!hoverLeft)}>
            {hoverLeft ? "Read less" : "Read more"}
          </button>
        </div>
        <div className="splitRight">
          <h1 className="text-red-500">Vide</h1>
          <p>
            Vide grew up in Uppsala etc etc etc...
            {hoverRight && " He aspired to be a great guitar player..."}
          </p>
          <button className="btnAbout" onMouseEnter={() => setHoverRight(!hoverRight)}>
            {hoverRight ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
      {/* placeholder för bilder & info om elias + vide */}
    </>
  );
}

export default About;