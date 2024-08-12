import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "./../hooks/useCursor";
import { faM, faMugHot } from "@fortawesome/free-solid-svg-icons";
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
    <div className='w-full h-[8vh] border-t-2 lg:flex text-center lg:justify-between   lg:px-0 '>
      <div className='resume opacity-0 lg:opacity-100  text-white text-xs font-mono lg:font-extrabold flex items-center  lg:text-2xl md:text-xl uppercase'>
        buy me a coffe
        <FontAwesomeIcon icon={faMugHot} className='mb-1 mx-2' />
      </div>
      <div className='text-white flex justify-center items-center'>
        <div className='flex items-start font-oswald gap-4'>
          <a
            href='https://www.instagram.com/ab4i_.shek/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>Instagram</span>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className='text-sm md:text-xl lg:text-2xl'
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
              icon={faLinkedin}
              className='text-sm md:text-xl lg:text-2xl'
            />
          </a>
          <a
            href='https://github.com/abhishek-end'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white text-sm md:text-xl  lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>GitHub</span>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-white text-sm md:text-xl lg:text-2xl'
            />
          </a>
          <a
            href='https://x.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center  text-white text-sm md:text-xl   lg:text-2xl gap-2'
          >
            <span {...eventHandlers}>Twitter</span>
            <FontAwesomeIcon
              icon={faTwitter}
              className='text-sm md:text-xl lg:text-2xl'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
