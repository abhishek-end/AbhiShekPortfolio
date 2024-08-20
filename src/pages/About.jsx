import React, { useEffect } from "react";
// import  from "./useCursor";
import Circle from "./../components/Circle.jsx";
import GetInTouch from "./../components/GetInTouch.jsx";
import Footer from "./../components/Footer.jsx";
import Language from "../components/Language.jsx";
const About = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Language/> 
        <GetInTouch />
        <Footer />
      </div>
      <Circle />
    </>
  );
};

export default About;
