import React from "react";
import { useCursor } from "./../hooks/useCursor.jsx";
const Circle = () => {
  const { position, isTouchingLink } = useCursor();
  return (
    <div
      className={`fixed  w-12 h-12 top-0 left-0 border-2 rounded-full pointer-events-none z-50 ${
        isTouchingLink ? "scale-150" : "scale-0"
      }`}
      style={{
        width: isTouchingLink ? "6rem" : "3rem",
        height: isTouchingLink ? "6rem" : "3rem",
        background: isTouchingLink ? "white" : "",
        mixBlendMode: "exclusion",
        transition: ".12s linear",
        transform: `translate(${position.x - (isTouchingLink ? 48 : 24)}px, ${
          position.y - (isTouchingLink ? 48 : 24)
        }px)`,
      }}
    ></div>
  );
};

export default Circle;
