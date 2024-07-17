import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import ScrollMore from "./ScrollMore";
import "./../index.css";
import { useCursor } from "./useCursor";

const Home = () => {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });
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

  const handleMouseEnter = () => {
    setIsTouchingLink(true);
  };

  const handleMouseLeave = () => {
    setIsTouchingLink(false);
  };

  useEffect(() => {
    const handlePointer = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
      setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    document.addEventListener("pointermove", handlePointer);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.body.removeEventListener("pointermove", handlePointer);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-black'>
        <div className='z-50'>
          <h1 className='font-eleventwenty font-thin text-9xl text-white capitalize tracking-[2px]'>
            abhisheK-Yadav
          </h1>
          <div className='items-center justify-center text-white text-5xl flex font-oswald font-semibold'>
            <h4
              className=''
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              style={{ transition: "all" }}
            >
              {randomText}
            </h4>
            <span className='mx-4 text-transparent text-stroke '>
              Creative Developers
            </span>
          </div>
        </div>
      </div>
      {visible && (
        <div
          className='blob h-[250px] aspect-square rounded-full bg-white fixed blur-[150px] bg-gradient-to-r from-aquamarine to-mediumpurple'
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%)`,
            pointerEvents: "none",
          }}
        ></div>
      )}
      <Circle />
      <div className='bg-black w-full h-screen flex justify-center items-start '>
        <ScrollMore />
      </div>
    </>
  );
};

export default Home;
