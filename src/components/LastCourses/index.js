import React from "react";
import "./style.scss";
import foto1 from "../../assets/images/1.jpg";
import foto2 from "../../assets/images/2.jpg";
import foto3 from "../../assets/images/3.jpg";
import foto4 from "../../assets/images/4.jpg";
import quotation from "../../assets/images/quotation.png";
import GetCourse from "../GetCourse";

export default function LastCourses() {
  return (
    <div className="lastCoursesContainer">
      <span className="sectionTitle">CURSOS ANTERIORES</span>
      <div className="gallery">
        <img className="imgContainer" src={foto1} alt="fedeNowback1" />
        <img className="imgContainer" src={foto2} alt="fedeNowback2" />
        <img className="imgContainer" src={foto3} alt="fedeNowback3" />
        <img className="imgContainer" src={foto4} alt="fedeNowback4" />
      </div>
      <div className="jobsMessage">
        <div className="topWrapper">
          <img className="comillas" src={quotation} alt="comillas" />
          <span className="textMessage">
            El diseño no es sólo lo que se ve y se siente. El diseño es cómo
            funciona
          </span>
          <img className="comillas" src={quotation} alt="comillas" />
        </div>
        <span className="sign">STEVE JOBS</span>
      </div>
    </div>
  );
}
