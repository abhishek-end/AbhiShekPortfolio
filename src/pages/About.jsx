import React from "react";
import CursorFollower from "./useCursor";
import Circle from "./Circle";
const About = () => {
  return (
    <CursorFollower>
      <div className='bg-black flex items-center justify-center h-screen w-full '>
        <h1 className='text-white  text-9xl font-gugi'>ABOUT ME </h1>
      </div>
      <Circle />
    </CursorFollower>
  );
};

export default About;
