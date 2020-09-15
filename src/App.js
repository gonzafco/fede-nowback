import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MakingBrand from "./components/MakingBrand";
import Separator from "./components/Separator";
import WhoAMe from "./components/WhoAMe";
import GetCourse from "./components/GetCourse";
import YourImage from "./components/YourImage";
import CourseContent from "./components/CourseContent";
import LastCourses from "./components/LastCourses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MakingBrand />
      {/* <Separator /> */}
      <WhoAMe />
      <GetCourse />
      <YourImage />
      <CourseContent />
      <LastCourses />
      <Footer />
    </div>
  );
}

export default App;
