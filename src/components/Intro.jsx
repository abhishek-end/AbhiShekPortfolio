import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "./../hooks/useCursor";
// import Socailinks from "./Socailinks";
import Image from "./Image";

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
    <div className='flex justify-center items-center flex-col h-screen  w-full mt-80 lg:mt-82 lg:flex-row lg:px-48'>
      <div className='flex justify-center  flex-col w-full items-start pl-2  lg:bg-[#D3D5D4] rounded-l-lg'>
        <div className=' '>
          <div className=' text-white lg:text-black text-7xl md:text-8xl lg:text-9xl  font-bold font-oswald w-1/2 '>
            {/* {hello world for bio} */}
            <h4 className='leading-none select-none '>{"HELLO WORLD"}</h4>
          </div>
          <div className=' text-white lg:text-white text-2xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-mono leading-tight mt-12 lg:mt-4 select-none  '>
            <h4 className='lg:w-1/2 w-full0 h-full bg-black lg:p-2 px-2 rounded-lg'>
              Hi, I'm Abhishek a creative web developer based in India, crafting
              captivating websites with engaging motion interactions.
            </h4>
          </div>
          <div className='more text-white lg:text-black font-gugi p-2 mt-12 lg:mt-2 w-1/2 flex text-2xl capitalize font-bold gap-2 '>
            <Link to={"/about"} {...eventHandlers}>
              more
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              size='lg'
              className='lg:text-black text-white -rotate-45'
            />
          </div>
        </div>
      </div>
      <Image />
    </div>
  );
};

export default Intro;
