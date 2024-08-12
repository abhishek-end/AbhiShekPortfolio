import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "./../hooks/useCursor";
// import Image from "./Image";

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
    <div className='flex lg:justify-center lg:items-center flex-col h-screen w-full mt-80 lg:mt-72 lg:flex-row lg:px-48 p-2'>
      <div className='flex  flex-col lg:w-full lg:h-1/2  items-start pl-2 bg-[#D3D5D4] lg:rounded-l-lg'>
        <div className='text-black text-7xl md:text-8xl lg:text-9xl font-bold font-oswald w-1/2 h-1/2'>
          {/* {hello world for bio} */}
          <h4 className='leading-none select-none '>{"HELLO WORLD"}</h4>
        </div>
        <div className=' text-white lg:text-white text-2xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-mono leading-tight mt-12 lg:mt-4 select-none  '>
          <h4 className='lg:w-1/2 w-full h-full bg-black lg:p-2 px-2 rounded-lg'>
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
      {/* <Image />
       */}
      <div className="bg-[url('src/img/1000192870.png')] w-full h-full lg:w-1/2 lg:h-3/5 bg-no-repeat lg:rounded-lg bg-cover "></div>
    </div>
  );
};

export default Intro;
