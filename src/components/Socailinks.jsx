import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "./../hooks/useCursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Socailinks = () => {
  const { setIsTouchingLink } = useCursor();
  const handleMouseEnter = () => setIsTouchingLink(true);
  const handleMouseLeave = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: "underline-animation",
  };
  const textRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 30%",
        },
      })
      .from(textRef.current, {
        y: "100",
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.05,
      });
  }, []);
  return (
    <div className='lg:w-8/12 lg:h-1/2 flex flex-col w-full h-full mt-32 lg:mt-56  rounded-lg lg:p-4  p-2  '>
      <div className='flex flex-col lg:mt-0 lg:w-full lg:justify-center h-1/2 overflow-hidden'>
        <h4
          className='text-white text-7xl lg:text-9xl md:text-8xl uppercase font-extrabold font-oswald'
          ref={(el) => (textRef.current[0] = el)}
        >
          Social <br /> Media
        </h4>
      </div>
      <div
        className='lg:text-2xl text-white font-spacemono lg:p-4 lg:flex lg:flex-col lg:w-1/2 rounded-lg bg-black w-2/3 mt-10 lg:mt-8 gap-3 lg:gap-4 flex flex-col bg- p-2 '
        ref={(el) => (textRef.current[2] = el)}
      >
        <a
          href='https://www.instagram.com/ab4i_.shek/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center lg:font-light  space-x-2 hover:px-1 transition-all '
        >
          <span {...eventHandlers}>Instagram</span>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href='https://www.linkedin.com/in/abhishek49534'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 hover:px-1 transition-all'
        >
          <span {...eventHandlers}>LinkedIn</span>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/abhishek-end'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center  gap-2 hover:px-1 transition-all'
        >
          <span {...eventHandlers}>GitHub</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://x.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-centerspace-x-2 hover:px-1 transition-all'
        >
          <span {...eventHandlers}>Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Socailinks;
