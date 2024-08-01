import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "./../hooks/useCursor";
const Socailinks = () => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };

  return (
    <div className='w-full h-[55%] flex flex-col mt-10  lg:items-center  lg:mt-0 lg:border-l'>
      <div className='flex flex-col lg:mt-0 lg:w-full lg:justify-center lg:items-center h-1/2'>
        <h4 className='text-white text-7xl lg:text-9xl md:text-8xl uppercase font-bold mb-2'>
          Social <br /> Media
        </h4>
      </div>
      <div className='lg:flex lg:flex-col lg:justify-center w-full lg:pl-16 mt-10 lg:mt-8 gap-2 flex flex-col '>
        <a
          href='https://www.instagram.com/ab4i_.shek/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>Instagram</span>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </a>
        <a
          href='https://www.linkedin.com/in/abhishek49534'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>LinkedIn</span>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </a>
        <a
          href='https://github.com/abhishek-end'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>GitHub</span>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className='text-white text-2xl '
          />
        </a>
        <a
          href='https://x.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>Twitter</span>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </a>
      </div>
    </div>
  );
};

export default Socailinks;
