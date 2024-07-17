import React, { useState } from "react";
import "./../index.css";

const ScrollMore = () => {
  const [rotate] = useState("Scroll For more * Scroll For more * ");

  const handleRotateFunction = () => {
    return rotate.split("").map((char, i) => (
      <span
        key={i}
        style={{
          transform: `rotate(${i * 10}deg)`,
        }}
      >
        {char}
      </span>
    ));
  };
  return (
    <div className='relative w-[250px] aspect-square rounded-full m-[-150px]'>
      <div className='text flex justify-center '>
        <p>{handleRotateFunction()}</p>
      </div>
    </div>
  );
};

export default ScrollMore;
