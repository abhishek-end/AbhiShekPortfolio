import React from "react";
import { useCursor } from "./useCursor";

const Circle = () => {
  const { position } = useCursor();

  return (
    <div
      className='fixed w-12 h-12 top-0 left-0 border-2 rounded-full  pointer-events-none'
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    ></div>
  );
};

export default Circle;
