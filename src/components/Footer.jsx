import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "./../hooks/useCursor";
const Footer = () => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };
  return (
    <div className='w-full h-[8vh] border-t-2 flex justify-between  px-2 '>
      <div className='resume text-white text-xs   font-oswald flex items-center -tracking-tighter lg:text-2xl md:text-xl'>
        RESUME/VIEW
      </div>
      <div className='text-white flex justify-center items-center  '>
        <div className='flex items-start font-oswald gap-1'>
          <a
            href='https://www.instagram.com/ab4i_.shek/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>Instagram</span>
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className='text-sm md:text-xl'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/abhishek49534'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl   lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>LinkedIn</span>
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className='text-sm md:text-xl'
            />
          </a>
          <a
            href='https://github.com/abhishek-end'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl   lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>GitHub</span>
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className='text-white text-sm md:text-xl '
            />
          </a>
          <a
            href='https://x.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl   lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>Twitter</span>
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className='text-sm md:text-xl'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
