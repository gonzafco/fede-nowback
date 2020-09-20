import React from "react";
import "./style.scss";

export default function Hero() {
  const heroText =
    "Te muestro las herramientas\n  para que puedas crear tu identidad";
  return (
    <header className="heroContainer">
      <div className="heroTextContainer">
        <div className="heroTitle">Sé creativo y potencia tu imagen</div>
        <div className="heroText">{heroText}</div>
      </div>
    </header>
  );
}
