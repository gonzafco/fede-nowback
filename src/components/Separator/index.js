import React from "react";
import "./style.scss";
import arrow from "../../assets/images/arrow.png";

export default function Separator() {
  return (
    <div className="separatorContainer">
      <span className="separatorText">
        El diseño de una marca puede potenciar o hundir un proyecto
      </span>
      <div className="decorationArrowContainer">
        <img src={arrow}/>
      </div>
    </div>
  );
}
