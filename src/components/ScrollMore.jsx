import React, { useState } from "react";
// import "./../index.css";

const ScrollMore = () => {
  const [rotate] = useState("Scroll For more * Scroll For more * ");

  const handleRotateFunction = () => {
    let circleRadius = 90;
    return rotate.split("").map((char, i) => (
      <span
        key={i}
        style={{
          transform: `rotate(${i * 10}deg)`,
          transformOrigin: `0 ${circleRadius}px`,
        }}
      >
        {char}
      </span>
    ));
  };
  return (
    <div className='relative w-[180px] h-[180px]  m-[-80px]'>
      <div className='text rounded-full absolute w-[180px] aspect-square flex justify-center uppercase '>
        <p>{handleRotateFunction()}</p>
      </div>
    </div>
  );
};

export default ScrollMore;
