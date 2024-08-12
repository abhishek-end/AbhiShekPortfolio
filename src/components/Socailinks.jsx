import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "./../hooks/useCursor";
const Socailinks = () => {
  const { setIsTouchingLink } = useCursor();
  const handleMouseEnter = () => setIsTouchingLink(true);
  const handleMouseLeave = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: "underline-animation",
  };

  return (
    <div className='lg:w-8/12 lg:h-1/2 flex flex-col w-full h-full mt-56 justify-cente lg:mt-0  lg:bg-[#D3D5D4] rounded-lg lg:p-4 px-4'>
      <div className='flex flex-col lg:mt-0 lg:w-full lg:justify-center  h-1/2'>
        <h4 className='text-white lg:text-black text-7xl lg:text-9xl md:text-8xl uppercase font-extrabold font-oswald '>
          Social <br /> Media
        </h4>
      </div>
      <div className='lg:p-4 lg:flex lg:flex-col w-1/2 lg:rounded-lg  mt-10 lg:mt-8 gap-3 lg:gap-4 flex flex-col lg:bg-black'>
        <a
          href='https://www.instagram.com/ab4i_.shek/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center lg:font-light font-mono  text-white text-2xl space-x-2'
        >
          <span {...eventHandlers}>Instagram</span>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href='https://www.linkedin.com/in/abhishek49534'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center  lg:font-light font-mono text-white text-2xl space-x-2'
        >
          <span {...eventHandlers}>LinkedIn</span>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/abhishek-end'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center  lg:font-light font-mono text-white text-2xl space-x-2'
        >
          <span {...eventHandlers}>GitHub</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://x.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center  lg:font-light font-mono text-white text-2xl space-x-2'
        >
          <span {...eventHandlers}>Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Socailinks;
