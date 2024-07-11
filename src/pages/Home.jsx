import React from "react";
import Circle from "./Circle";
// import CursorFollower from "./useCursor";

const Home = () => {
  return (
    <>
      {/* <CursorFollower> */}
        <div className='flex justify-center items-center w-full h-screen bg-black'>
          <Circle />
          <h1 className='font-gugi text-white text-9xl text-center'>HOME</h1>
        </div>
      {/* </CursorFollower> */}
    </>
  );
};

export default Home;
