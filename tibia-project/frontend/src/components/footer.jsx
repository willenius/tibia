import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footerBtm"> {/* route här sen till alla länkar och sidan i sig */}
        <ul className="footerDiv">
          <li> <a href="https://linktr.ee/tibia4you"
            target="_blank">
            Social links</a> </li>
          <li>©2025   tibia4u. All rights reserved. </li>
          <li>Terms & Conditions </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
