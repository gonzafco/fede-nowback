import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footerContainer">

      <div className="gradientSeparator"></div>
      <div className="socialContainer">
        <i className="icons">
          <FontAwesomeIcon size="3x" icon={faFacebook} />
        </i>
        <i className="icons">
          <FontAwesomeIcon size="3x" icon={faInstagram} />
        </i>
      </div>
      <span className="fedeNowBack">Fede Nowback</span>
    </div>
  );
}
