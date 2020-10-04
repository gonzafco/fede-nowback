import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="gradientSeparator"></div>
      <div className="socialContainer">
        <a href="https://www.facebook.com/fede.nowback">
          <div className="icons">
            <FontAwesomeIcon size="2x" icon={faFacebook} />
          </div>
        </a>
        <a href="https://www.instagram.com/fedenowback">
          <div className="icons">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </div>
        </a>
      </div>
      <span className="fedeNowBack">Fede Nowback</span>
    </div>
  );
}
