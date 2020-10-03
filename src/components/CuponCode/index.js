import React from "react";
import "./style.scss";

export default function CuponCode() {
  return (
    <div className="cuponCode">
      <div className="formContainer">
        <input className="inputText" type="text" placeholder="Codigo de descuento" />
        <button className="btn-cupon">APLICAR</button>
      </div>
      <button className="btn-buy">ADQUIRIR CURSO</button>
    </div>
  );
}
