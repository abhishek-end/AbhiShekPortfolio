import React from "react";
import WorkButton from "./WorkButton.jsx";
import { useCursor } from "../hooks/useCursor.jsx";
const MyWork = () => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };

  const data = [
    {
      text: "Lazarev Website Agencey ",
    },
    {
      text: "ROLEX WATCH Recreated",
    },
    {
      text: "Personal Portfolio",
    },
    {
      text: "Project4",
    },
  ];

  return (
    <div className=' w-full text-white h-[60vh] lg:py-6 mt-32  px-2  lg:-mt-20 mb-20  lg:flex  lg:flex-col lg:px-48'>
      <div className='text-white text-xl uppercase lg:text-7xl  text-center lg:text-left font-extrabold whitespace-wrap w-full  '>
        <h4>MY WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full lg:p-6 border-b  mt-2 lg:mt-0 flex flex-col justify-between '
          >
            <div className=''>
              <h4 className='text-white text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold mt-2'>
                {item.text}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className='px-6'>
        <WorkButton link='/work' text='Work' />
      </div>
    </div>
  );
};

export default MyWork;
