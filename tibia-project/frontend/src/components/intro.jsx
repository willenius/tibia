import "../styles/intro.css";
import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tibiaLogo from "../assets/tibia.svg";

function Intro({ onStart }) {
  return (
    <>
      <div className="introWrapper">
        <Link to="/" onStart={onStart}>
          <motion.img
            src={tibiaLogo}
            alt="logo of tibia"
            className="tibiaLogo"
            animate={{
              scale: 1,
              rotate: 360,
              transition: { duration: 1.5 },
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default Intro;
