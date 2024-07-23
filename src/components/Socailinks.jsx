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
    <div className='w-1/2 h-[56%] flex flex-col items-center  '>
      <div className='flex flex-col items-start  gap-2  mt-20 '>
        <h4 className='text-white text-6xl uppercase font-bold mb-4'>
          Social Media
        </h4>
        <a
          href='https://www.instagram.com/ab4i_.shek/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-3xl space-x-3'
        >
          <span {...eventHandlers}>Instagram</span>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className='text-white text-2xl '
          />
        </a>
        <a
          href='https://www.linkedin.com/in/abhishek49534'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>LinkedIn</span>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className='text-white text-2xl '
          />
        </a>
        <a
          href='https://github.com/yourprofile'
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
          href='https://github.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-white text-2xl space-x-3'
        >
          <span {...eventHandlers}>Twitter</span>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className='text-white text-2xl '
          />
        </a>
      </div>
    </div>
  );
};

export default Socailinks;