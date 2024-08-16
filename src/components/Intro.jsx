import React from "react";
import WorkButton from "./WorkButton";
const Intro = () => {
  return (
    <div className='flex lg:justify-center lg:items-center flex-col h-screen w-full mt-80  lg:flex-row lg:px-48'>
      <div className='flex  flex-col lg:w-full lg:h-1/2  items-start pl-2 bg-[#D3D5D4] lg:rounded-l-lg'>
        <div className='text-black text-7xl md:text-8xl lg:text-9xl font-bold font-oswald w-1/2 h-1/2 '>
          {/* {hello world for bio} */}
          <h4>{"HELLO WORLD"}</h4>  
        </div>
        <div className=' text-white lg:text-white text-xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-spacemono   mt-12 lg:mt-4 select-none  '>
          <h4 className='lg:w-1/2 w-full h-full bg-black lg:p-2 px-2 rounded-lg'>
            Hi, I'm Abhishek a front-end developer who loves design based in
            India, craft website with engaging and motions
          </h4>
        </div>
        <div className='text-black  -mt-2'>
          <WorkButton link='/about' text='More' />
        </div>
      </div>
      <div className='lg:w-1/2 lg:h-3/5 overflow-hidden mt-1 lg:overflow-auto '>
        <img
          src='https://res.cloudinary.com/dlonoxpli/image/upload/f_auto,q_auto/v1/my-images/abhishekimage'
          alt='Description of image'
          className=' h-full w-full object-cover lg:rounded-lg'
        />
      </div>
    </div>
  );
};

export default Intro;
