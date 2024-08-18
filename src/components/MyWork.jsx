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
      link: "view",
    },
    {
      text: "ROLEX WATCH Recreated",
      link: "view",
    },
    {
      text: "Personal Portfolio",
      link: "view",
    },
    {
      text: "Project4",
      link: "view",
    },
  ];

  return (
    <div className=' w-full text-white h-[60vh] lg:py-6 mt-32  px-2 mb-20  lg:flex  lg:flex-col lg:px-48'>
      <div className='text-white text-xl uppercase lg:text-7xl  text-center lg:text-left font-extrabold whitespace-wrap w-full  '>
        <h4>MY WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full lg:p-6 border-b  mt-2 lg:mt-0 flex items-center justify-between text-white text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold '
          >
            <div
              className='hover:px-4 transition-all flex  w-full justify-between
            '
            >
              <h4 className=' mt-2'>{item.text}</h4>
              <div className='hover'>
                <h4 className=''>{item.link}</h4>
              </div>
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
