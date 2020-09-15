import React from "react";
import "./style.scss";
import arrow from "../../assets/images/recurso1.png";

export default function MakingBrand() {
  return (
    <section className="makingBrandContainer">
      <div className="sectionDecoration">
        <img className="image" src={arrow} />
      </div>
      <div className="textContainer">
        <span className="makingBrandTitle">
          EL ARTE DE CREAR UNA BUENA MARCA
        </span>
        <p className="makingBrandText">
          La imágen de una marca es muy importante porque es lo primero que
          percibimos cuando miramos las redes sociales. Cuando vemos una
          publicación de una foto o un flyer observamos lo que está representado
          a través de una imagen antes de leer de qué se trata.
        </p>
        <p className="makingBrandText">
          Para maximizar la utilización de estas herramientas es importante
          saber, analizar y ahondar sobre los conceptos de los elemento que
          conforman una marca para luego plasmarlos en esas piezas y transmitir
          un mensaje coherente, claro y que refleje los valores del proyecto.
        </p>
        <p className="makingBrandText">
          En el curso ̈Creatividad para crear una marca ̈ veremos cómo desarrollar
          la identidad visual de tu proyecto, aprendiendo cual es el concepto
          que representa nuestra marca y qué elementos potencian la imagen.
        </p>
      </div>
    </section>
  );
}
