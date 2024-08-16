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
    <>
      <div className='flex justify-center items-center w-full h-screen p-4'>
        <div className='z-50 flex flex-col items-center justify-center '>
          <h1 className='font-ariata font-bold text-4xl sm:text-4xl whitespace-nowrap  md:text-6xl lg:text-7xl xl:text-9xl text-white capitalize tracking-[1px] sm:tracking-[2px]'>
            abhisheK-Yadav
          </h1>
          <div className='text-white flex text-xl sm:text-2xl lg:text-4xl xl:text-5xl gap-2 font-bold w-full  items-center justify-center '>
            <h4
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className='transition-all sm:mb-0'
            >
              {randomText}
            </h4>
            <span className='mx-0 sm:mx-2 text-transparent text-stroke text-xl sm:text-2xl lg:text-4xl xl:text-5xl '>
              Creative Developer
            </span>
          </div>
        </div>
      </div>

      {visible && (
        <div
          className='blob  w-60 aspect-square rounded-full  fixed bg-white blur-[180px] z-10'
          style={{
            left: `${position.x - 240 / 2}px`,
            top: `${position.y - 240 / 2}px`,
            pointerEvents: "none",
          }}
        ></div>
      )}
    </>
  );
};

export default Name;
