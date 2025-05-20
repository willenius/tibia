import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { FcDvdLogo } from "react-icons/fc";
import tibiaLogo from '../assets/tibia.svg'

function Header() {
  return (
    <>
      <header className="headerTop">
        <nav className="headerNav">
            <ul className="navbarLinks">
              <li><Link to ="/shows"> Shows & Tickets </Link></li>  {/* fixa länkar till biljetter */}
              <li className="navbarLogo">
                 <Link to="/"><img src={tibiaLogo} alt="logo of tibia" /></Link> </li> {/* just nu en linkto "hem", fundera på om det behövs */}
              <li className="mediaLogo"> 
                <Link to="/media"> <FcDvdLogo className="icon"/> Media </Link> </li>   {/* fixa länkar sen till videos som blir en egen sida */}
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
