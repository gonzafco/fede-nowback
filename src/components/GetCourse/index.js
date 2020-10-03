import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function GetCourse() {
  return (
    <div className="getCourseContainer">
      <Link to="/comprar">
        <button className="getCourse">ADQUIRIR CURSO</button>
      </Link>
    </div>
  );
}
