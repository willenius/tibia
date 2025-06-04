import "../styles/intro.css";
import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tibiaLogo from "../assets/tibia.svg";
import { useEffect, useState } from "react";
import * as React from "react";
// import { Progress } from "@/components/ui/progress"; ((lista ut detta))

function Intro() {
  const [progress, setProgress] = React.useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="introWrapper">
        <Link to="/">
          <motion.img
            src={tibiaLogo}
            alt="logo of tibia"
            className="tibiaLogo"
            animate={{
              scale: 1,
              rotate: 360,
              transition: { duration: 1 },
            }}
          />
          {/* <Progress value={progress} className="w-[60%]" /> lista ut*/}
        </Link>
      </div>
    </>
  );
}

export default Intro;
