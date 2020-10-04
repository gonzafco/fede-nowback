import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [classMenu, setClassMenu] = useState(false);
  function handleClickMenu() {
    setClassMenu(!classMenu);
  }
  return (
    <nav className="navbarContainer">
      <Link to="/">
        <span className="brand">FEDE NOWBACK</span>
      </Link>
      <FontAwesomeIcon
        onClick={handleClickMenu}
        className="menu"
        icon={faBars}
        color="white"
      />
      <div
        className={
          classMenu
            ? "userActionsContainer menu"
            : "userActionsContainer hidenMenu"
        }
      >
        <Link to="/login">
          <button className="btn login">ACCEDER</button>
        </Link>
        <Link to="/registro">
          <button className="btn signup">REGISTRARSE</button>
        </Link>
      </div>
    </nav>
  );
}
