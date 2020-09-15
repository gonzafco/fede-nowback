import React from "react";
import "./style.scss";
export default function WhoAMe() {
  return (
    <div className="whoameContainer">
      <div className="clipPath"></div>
      <div className="textWhoAme">
        <span className="hello">Hola,</span>
        <span className="fedeNowback">Soy Fede Nowback</span>
        <p className="textWhoame">
          Soy Diseñador grafico, productor audiovisual, ilustrador y asesor
          creativo.
        </p>
        <p className="textWhoame">
          Mis estudios, experiencia y sobre todo mi creatividad me dieron las
          herramientas que me permiten ayudar a otros a poder potenciar su
          imagen para tener mejores resultados.
        </p>
      </div>
    </div>
  );
}
