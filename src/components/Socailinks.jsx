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
    <div className='w-1/2 h-[55%] flex flex-col items-center border-l-[1px] '>
      <div className='flex flex-col items-start  gap-4  mt-8 '>
        <h4 className='text-white text-8xl uppercase font-bold mb-10 '>
          Social <br /> Media
        </h4>
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
