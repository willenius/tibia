import React from "react";
import "../styles/header.css";
import '../styles/homepage.css';

function Header() {
  return (
    <>
      <header className="headerTop">
        <nav className="headerNav">
          <div className="headerContainer">
            <ul className="navbarLinks">
              <li><a href="#shows">Shows & Tickets </a></li>  {/* fixa länkar till biljetter */}
              <li>tibia</li> {/* typ en placeholder atm, byt med något annat, kanske en "about us" */}
              <li><a href="#media">  Media</a></li>   {/* fixa länkar sen till videos som blir en egen sida */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
