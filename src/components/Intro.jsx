import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "./../hooks/useCursor";
import Socailinks from "./Socailinks";

const Intro = () => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };

  return (
    <div className='flex justify-center items-center h-screen bg w-full mt-48 '>
      <div className='flex  justify-center px-10 flex-col items-center w-1/2 h-[56%] border-r-[1px] '>
        <div className='hello-world text-white text-7xl  font-bold font-oswald '>
          <h4 className='leading-none select-none'>{"HELLO WORLD"}</h4>
        </div>
        <div className=' text-white text-2xl flex w-3/5 font-mono text-wrap flex-wrap leading-tight mt-12  select-none '>
          "Hi, I'm Abhishek a creative web developer in India, crafting
          captivating websites with engaging motion interactions."
        </div>
        <div className='more text-white font-gugi  mt-12  text-2xl capitalize font-bold flex items-start  gap-4 '>
          <Link to={"/about"} {...eventHandlers}>
            more
          </Link>
          <FontAwesomeIcon
            icon={faArrowRight}
            size='lg'
            className='text-white'
          />
        </div>
      </div>
      <Socailinks />
    </div>
  );
};

export default Intro;
