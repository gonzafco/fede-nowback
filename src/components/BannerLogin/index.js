import React from "react";
import "./style.scss";

export default function BannerLogin() {
  const text = "TENER UNA MARCA MAL DISEÑADA ES AYUDAR A TU COMPETENCIA";
  return (
    <div className="bannerLogin">
      <p className="textBanner">{text}</p>
    </div>
  );
}
