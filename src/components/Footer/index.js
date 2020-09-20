import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footerContainer">

      <div className="gradientSeparator"></div>
      <div className="socialContainer">
        <div className="icons">
          <FontAwesomeIcon size="2x" icon={faFacebook} />
        </div>
        <div className="icons">
          <FontAwesomeIcon size="2x" icon={faInstagram} />
          </div>
      </div>
      <span className="fedeNowBack">Fede Nowback</span>
    </div>
  );
}
