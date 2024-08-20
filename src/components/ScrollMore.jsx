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
          fontSize: `1.3rem`,
          lineHeight: "1px",
          // letterSpacing: "1px",
        }}
      >
        {char}
      </span>
    ));
  };
  return (
    <div className='relative w-[180px] h-[180px] lg:-m-16 -mt-28'>
      <div className='text absolute w-[180px] aspect-square flex justify-center uppercase'>
        <p>{handleRotateFunction()}</p>
      </div>
    </div>
  );
};

export default ScrollMore;
