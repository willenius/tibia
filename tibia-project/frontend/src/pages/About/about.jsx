import { useState } from "react";
import "./about.css";

function About() {
  const [showMoreElias, setShowMoreElias] = useState(false);
  const [showMoreVide, setShowMoreVide] = useState(false);

  return (
    <div className="aboutContainer">
      <div className="splitSection eliasSection">
        <img src="/public/elias.tibia.jpg"
        alt="Elias from tibia"
        className="aboutImage"
        />
        <h1>Elias</h1>
        <p>
          I just loved the idea...
          {showMoreElias && "Of being in a band with my best friend"}
        </p>
        <button
          className="btnAbout"
          onClick={() => setShowMoreElias(!showMoreElias)}
        >
          {showMoreElias ? "Read less" : "Read more"}
        </button>
      </div>
      <div className="splitSection videSection">
        <img src="/public/vide.tibia2.jpg"
        alt="Vide from tibia"
        className="aboutImage"
        />
        <h1 className="videHeader">Vide</h1>
        <p className="videParagraph">
          Vide grew up in Uppsala etc etc etc...
          {showMoreVide && " He aspired to be a great guitar player..."}
        </p>
        <button
          className="btnAbout"
          onClick={() => setShowMoreVide(!showMoreVide)}
        >
          {showMoreVide ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export default About;
