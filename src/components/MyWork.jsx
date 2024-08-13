import React, { useState, useRef, useEffect } from "react";
import { useCursor } from "./../hooks/useCursor";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const MyWork = () => {
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
    <div className=' w-full  min-h-screen  mt-32  px-2 lg:px-48  lg:-mt-4'>
      <div className='text-white text-xl uppercase lg:text-7xl  text-center lg:text-left font-extrabold whitespace-wrap w-full  '>
        <h4>MY WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-16 relative  '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full lg:p-6 border-b  mt-2 lg:mt-0 flex flex-col justify-between '
          >
            <div className='relative r-image patanhi'>
              <h4 className='text-white text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold mt-2'>
                {item.text}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
