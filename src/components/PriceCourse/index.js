import React from "react";
import "./style.scss";
import recurso from "../../assets/images/Recursos-08.png";

export default function PriceCourse(props) {
  const { price } = props;
  return (
    <div className="priceCourse">
      <div className="boxContainer">
        <div className="price">${price}</div>
        <img src={recurso} className="payDecoration" />
      </div>
    </div>
  );
}
