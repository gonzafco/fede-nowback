import React from "react";
import ReactPlayer from "react-player";

import "./style.scss";

export default function YourImage() {
  return (
    <section className="yourImage">
      <span className="titleSection">TU IMAGEN IMPORTA</span>

      <div className="videoContainer">        
        <div className="clipPath"></div>
        <ReactPlayer
          className="reactPlayerContainer"
          width="800px"
          height="400px"
          url="https://www.youtube.com/watch?v=OB6eWBiNRz4"
        />
      </div>
    </section>
  );
}



// 