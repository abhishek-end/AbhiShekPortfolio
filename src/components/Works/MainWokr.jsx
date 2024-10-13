import React, { useEffect } from "react";
import WorkButton from "../WorkButton";
import { useCursor } from "../../hooks/useCursor";

const MainWork = ({ link, anchor, topic, projectName }) => {
  const { setIsTouchingLink } = useCursor();

  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);
  return (
    <>
      <div className='min-h-screen w-full text-white scaleX'>
        <div className='w-full  h-full relative group p-2 '>
          <h1 className='absolute top-36 sm:-left-4  text-5xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-nhaas font-bold z-50  pointer-events-none'>
            {topic}
          </h1>
          <a
            href={anchor}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-100 transition-opacity'
          >
            <img
              src={link}
              className='w-full h-[900px]  object-cover  border-8 border-[#fac230] rounded-2xl hover:scale-90 hover:opacity-50 transition-transform duration-300 opacity-70 p-1'
              onMouseLeave={removeTouch}
              onMouseEnter={handleTouch}
              alt='Image'
            />
          </a>
        </div>
        <div className='flex  items-center h-full mt-10'>
          <h1 className='  text-white font-bold text-2xl p-2 first-letter:text-[#fac243]  '>
            {projectName}
          </h1>
          <div>
            <WorkButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWork;
