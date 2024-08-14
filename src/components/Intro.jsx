import React, { useEffect } from "react";
import Image from "./../img/1000192870.png";
import WorkButton from "./WorkButton";
const Intro = () => {
  return (
    <div className='flex lg:justify-center lg:items-center flex-col h-screen w-full mt-80 lg:mt-72 lg:flex-row lg:px-48'>
      <div className='flex  flex-col lg:w-full lg:h-1/2  items-start pl-2 bg-[#D3D5D4] lg:rounded-l-lg'>
        <div className='text-black text-7xl md:text-8xl lg:text-9xl font-bold font-oswald w-1/2 h-1/2'>
          {/* {hello world for bio} */}
          <h4 className='leading-none select-none '>{"HELLO WORLD"}</h4>
        </div>
        <div className=' text-white lg:text-white text-2xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-mono leading-tight mt-12 lg:mt-4 select-none  '>
          <h4 className='lg:w-1/2 w-full h-full bg-black lg:p-2 px-2 rounded-lg'>
            Hi, I'm Abhishek a creative web developer based in India, crafting
            captivating websites with engaging motion interactions.
          </h4>
        </div>
        <div className='text-black  -mt-2'>
          <WorkButton link='/about' text='More' />
        </div>
      </div>
      <div className='lg:w-1/2 lg:h-3/5 overflow-hidden mt-1 lg:overflow-auto '>
        <img
          src={Image}
          alt='Description of image'
          className=' h-full w-full object-cover lg:rounded-lg'
        />
      </div>
    </div>
  );
};

export default Intro;
