import React from "react";
import "./style.scss";

export default function RegisterForm() {
  return (
    <div className="register">
      <div className="inputsContainer">
        <input className="inputRegister" type="text" placeholder="Nombre completo"/>
        <input className="inputRegister" type="text" placeholder="E-Mail"/>
        <input className="inputRegister" type="text" placeholder="Whatsapp"/>
      </div>
      <button className="btn">REGISTRAR</button>
    </div>
  );
}
