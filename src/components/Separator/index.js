import React from "react";
import "./style.scss";

export default function Separator() {
  return (
    <div className="separatorContainer">
      <span className="separatorText">
        El diseño de una marca puede potenciar o hundir un proyecto
      </span>

      <div className="decorationArrowLeft"></div>
      <div className="decorationArrowMiddle"></div>
      <div className="decorationArrowRight"></div>
    </div>
  );
}
