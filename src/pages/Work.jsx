import React from "react";
import Circle from "./Circle";
import CursorFollower from "./useCursor";
const Work = () => {
  return (
    <CursorFollower>
      <div className='flex justify-center items-center  h-screen w-full bg-black '>
        <h1 className='text-white text-9xl uppercase '>here you see my work</h1>
      </div>
      <Circle />
    </CursorFollower>
  );
};

export default Work;
