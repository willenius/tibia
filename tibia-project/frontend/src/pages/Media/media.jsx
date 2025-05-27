import React from "react";
import ReactPlayer from "react-player/youtube"; //kommer ta bort sen, ej använda mao
import { Player } from "video-react";
import ".//media.css";
import "video-react/dist/video-react.css";

function Media() {
  return (
    <div className="flexContainerMedia">
      <div className="mediaGrid">
        <Player
          playsInline
          fluid={false} //tar bort vide-react standard css för videon. aint pretty men något
          width={640}
          height={360}
          src="/marys.mp4"
        />
         {/* <ReactPlayer url="https://youtu.be/9ez0NA3GFxY?si=ATHRdsx65_Gs2eIs-U" /> */}
        {/* <ReactPlayer url="https://youtu.be/fDwZG0_aK-0?si=EZqg3P1Eq6PS-Vgf-U" /> */}
        <ReactPlayer url="https://youtu.be/OlnZ1JOZM9s?si=A0cHA5DML-LjPtKw-U" /> 
        {/*  /* göra en egen sida som är som en video-player, nu react-player så länge...   */}
      </div>
    </div>
  );
}

export default Media;
