import React from "react";
import fedeNowback from "../../assets/images/fedeNowback.png"
import "./style.scss";

export default function Hero() {
  const heroText =
    "Te muestro las herramientas\n  para que puedas crear tu identidad";
  return (
    <header className="heroContainer">
      <img className="imgFedeNowback" src={fedeNowback} alt="FedeNowBack Background" />
      <div className="heroTextContainer">
        <div className="heroTitle">Sé creativo y potencia tu imagen</div>
        <div className="heroText">{heroText}</div>
      </div>
    </header>
  );
}
