import React from "react";
import GetCourse from '../GetCourse'
import "./style.scss";
import drawTable from "../../assets/images/Recursos-02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function CourseContent() {
  return (
    <div className="courseContentWrapper">
      <div className="courseContentContainer">
        <div className="decorationContainer">
          <img src={drawTable} alt="pizarra" />
        </div>
        <div className="courseInfoContainer">
          <span className="courseTitle">CONTENIDO DEL CURSO</span>
          <ul className="courseItems">
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">¿Qué es una marca?</span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">
                ¿La importancia de generar un buena identidad?
              </span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">Como armar una buena marca</span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">Elementos que conforman una marca</span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">
                Como tener una imagen coherente con el proyecto
              </span>
            </li>
          </ul>
        </div>
        <div className="courseInfoContainer">
          <span className="courseTitle">MODALIDAD DEL CURSO</span>
          <ul className="courseItems">
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">2 Horas de contenido</span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">Ebook gratuito con el contenido</span>
            </li>
            <li className="itemCourse">
              <FontAwesomeIcon icon={faSquare} color="#e64041" />
              <span className="liItem">Clase en vivo</span>
            </li>
          </ul>
        </div>
      </div>
      <GetCourse />
    </div>
  );
}
