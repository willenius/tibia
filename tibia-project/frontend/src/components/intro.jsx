import "../styles/intro.css";
import { IoPlay } from "react-icons/io5";


function Intro({onStart}) {
  return (
    <>
    <div className="introWrapper">
        <button onClick={onStart}>Start</button>
        </div>
      {/* <Link to="/media"> <FcDvdLogo className="icon"/> Media </Link> </li> 
        {/* fixa länkar sen till videos som blir en egen sida */}
    </>
  );
}

export default Intro;
