import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import "./style.scss";

export default function YourImage() {
  const { innerWidth: width } = window;
  const [dimensions, setDimensions] = useState({
    width: "",
    height: "",
  });

  useEffect(() => {
    checkWidth(width);
    console.log("hola");
  }, []);
  function checkWidth(width) {
    if (width > 900) {
      setDimensions({ width: "800px", height: "400px" });
    } else if (width > 500) {
      setDimensions({ width: "600px", height: "300px" });
    } else {
      setDimensions({ width: "100%", height: "60%" });
    }
    console.log(dimensions);
  }

  return (
    <section className="yourImage">
      <span className="titleSection">TU IMAGEN IMPORTA</span>

      <div className="videoContainer">
        <div className="clipPath"></div>
        <ReactPlayer
          className="reactPlayerContainer"
          width={dimensions.width}
          height={dimensions.height}
          url="https://www.youtube.com/watch?v=OB6eWBiNRz4"
        />
      </div>
    </section>
  );
}

//
