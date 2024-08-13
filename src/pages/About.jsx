import React from "react";
// import  from "./useCursor";
import Circle from "./../components/Circle.jsx";
import GetInTouch from "./../components/GetInTouch.jsx";
import Footer from "./../components/Footer.jsx";
const About = () => {
  return (
    <>
      <div className='bg-black flex items-center justify-center h-screen w-full '>
        <h1 className='text-white  text-3xl font-gugi'>ABOUT ME </h1>
      </div>
      <div className="px-48">
        <GetInTouch />
        <Footer />
      </div>
      <Circle />
    </>
  );
};

export default About;
