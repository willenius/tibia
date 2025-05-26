import React from "react";
import ReactPlayer from "react-player/youtube";
import './/media.css';


function Media() {
  return (
    <div className="flexContainerMedia">
      <div className="mediaGrid">
        <video width="640" height="360" controls> 
        <source src="/marys.mp4" type="video/mp4" /> 
        </video>
        <ReactPlayer
          url="https://youtu.be/9ez0NA3GFxY?si=ATHRdsx65_Gs2eIs-U"
        />
        <ReactPlayer
          url="https://youtu.be/fDwZG0_aK-0?si=EZqg3P1Eq6PS-Vgf-U"
          
        />
        <ReactPlayer
          url="https://youtu.be/OlnZ1JOZM9s?si=A0cHA5DML-LjPtKw-U"
         
        />
        {/*  /* göra en egen sida som är som en video-player, nu react-player så länge...   */}
      </div>
    </div>
  );
}

export default Media;
