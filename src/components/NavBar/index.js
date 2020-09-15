import React from "react";
import "./style.scss";
export default function NavBar() {
  return (
    <nav className="navbarContainer">
      <span className="brand">FEDE NOWBACK</span>
      <div className="userActionsContainer">
        <button className="btn login">ACCEDER</button>
        <button className="btn signup">REGISTRARSE</button>
      </div>
    </nav>
  );
}
