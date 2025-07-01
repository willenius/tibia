import React from "react";
import ReactPlayer from "react-player/youtube"; //kommer ta bort sen, ej använda mao

import ".//media.css";


function Media() {
  return (
    <div className="flexContainerMedia">
      <div className="mediaGrid">
        <ReactPlayer url="https://youtu.be/5gKVq0bU9qE?si=SqPuL6BGyoBsEGdF" controls="true" volume={0.25} />
        <ReactPlayer url="https://youtu.be/9ez0NA3GFxY?si=ATHRdsx65_Gs2eIs-U" controls="true" volume={0.25} />
        <ReactPlayer url="https://youtu.be/fDwZG0_aK-0?si=EZqg3P1Eq6PS-Vgf-U" controls="true" volume={0.25} />
        <ReactPlayer url="https://youtu.be/OlnZ1JOZM9s?si=A0cHA5DML-LjPtKw-U" controls="true" volume={0.25} />
        {/*  /* göra en egen sida som är som en video-player, nu react-player så länge...   */}
        {/* kör nog ändå på youtube i slutändan */}
      </div>
    </div>
  );
}

export default Media;
