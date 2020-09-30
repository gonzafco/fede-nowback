import React from 'react'

import NavBar from '../../components/NavBar'
import Hero from '../../components/Hero'
import MakingBrand from '../../components/MakingBrand'
import Separator from '../../components/Separator'
import WhoAMe from '../../components/WhoAMe'
import GetCourse from '../../components/GetCourse'
import YourImage from '../../components/YourImage'
import CourseContent from '../../components/CourseContent'
import LastCourses from '../../components/LastCourses'
import Footer from '../../components/Footer'


export default function Home() {
  console.log("cargando el Page Home")
  return (
    <div>
      <NavBar /> 
      <Hero />
      <MakingBrand />
      <Separator />
      <WhoAMe />
      <GetCourse />
      <YourImage />
      <CourseContent />
      <LastCourses />
      <Footer />
      
    </div>
  )
}
