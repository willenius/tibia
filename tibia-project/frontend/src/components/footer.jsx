import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footerBtm"> {/* route här sen till alla länkar och sidan i sig */}
        <ul className="footerDiv">
          <li> <a href="https://linktr.ee/tibia4you"
                target="_blank">
            <p>Social links</p></a> </li>
          <li><p>©2025   tibia4u. All rights reserved.</p> </li>
          <li><p>Terms & Conditions</p> </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
