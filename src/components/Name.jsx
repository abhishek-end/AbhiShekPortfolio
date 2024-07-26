import React, { useEffect, useState } from "react";
import { useCursor } from "../hooks/useCursor.jsx";
import "./../index.css";

const Name = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const { setIsTouchingLink } = useCursor();
  const [randomText, setRandomText] = useState("Unox'd");

  const letters = "abcdefghijklmnopqrstuvwxyz";

  const scrambleText = () => {
    let intervalId = setInterval(() => {
      setRandomText((prevText) =>
        prevText
          .split("")
          .map(() => letters[Math.floor(Math.random() * 26)])
          .join("")
      );
    }, 20);

    setTimeout(() => {
      clearInterval(intervalId);
      setRandomText("Good");
    }, 180);
  };

  const handleClick = () => {
    if (randomText === "Unox'd" || randomText === "GOOD") {
      scrambleText();
    }
  };

  const handleMouseEnter = () => setIsTouchingLink(true);
  const handleMouseLeave = () => setIsTouchingLink(false);

  useEffect(() => {
    const handlePointer = (event) => {
      setPosition({ x: event.clientX, y: event.clientY }), setVisible(true);
    };

    const handlePointerLeave = () => setVisible(false);

    document.addEventListener("pointermove", handlePointer);
    document.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      document.body.removeEventListener("pointermove", handlePointer);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);
  return (
    <div>
      <div className='flex justify-center items-center w-full h-screen '>
        <div className='z-50 flex flex-col items-center  justify-center'>
          <h1 className='font-eleventwenty font-bold text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white capitalize tracking-[1px] sm:tracking-[2px]'>
            abhisheK-Yadav
          </h1>
          <div className='flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold'>
            <h4
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className='transition-all'
            >
              {randomText}
            </h4>
            <span className='mx-4 text-transparent text-stroke'>
              Creative Developer
            </span>
          </div>
        </div>
      </div>
      {visible && (
        <div
          className='blob h-[250px] aspect-square rounded-full bg-white fixed blur-[150px] bg-gradient-to-r from-aquamarine to-mediumpurple'
          style={{
            left: `${position.x - 125}px`,
            top: `${position.y - 125}px`,
            pointerEvents: "none",
          }}
        ></div>
      )}
    </div>
  );
};

export default Name;
