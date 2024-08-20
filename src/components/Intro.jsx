import React from "react";
import WorkButton from "./WorkButton";
const Intro = () => {
  return (
    <div className='flex lg:justify-center lg:items-center flex-col sm:h-[50vh] lg:h-full  w-full mt-80  lg:flex-row lg:px-48'>
      <div className='flex  flex-col lg:w-full lg:h-1/2  items-start pl-2  lg:rounded-l-lg'>
        <div className='text-white  text-7xl md:text-8xl sm:text-9xl  lg:text-9xl font-bold font-oswald w-1/2 h-1/2 '>
          {/* {hello world for bio} */}
          <h4>{"HELLO WORLD"}</h4>
        </div>
        <div className=' text-white text-xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-spacemono   mt-12 lg:mt-4 select-none  '>
          <h4 className='lg:w-1/2  h-full  lg:p-2 px-2 rounded-lg lg:mt-0'>
            Hi, I'm Abhishek a front-end developer who loves design based in
            India, craft website with engaging and motions
          </h4>
        </div>
        <div className='text-white mt-10 mb-10'>
          <WorkButton link='/about' text='More' />
        </div>
      </div>
      <div className='w-full lg:w-1/2 lg:h-3/5 mt-10 lg:mt-1 opacity-1  lg:opacity-0 xl:opacity-100 sm:opacity-0 md:opacity-0 overflow-hidden'>
        <img
          src='https://res.cloudinary.com/dlonoxpli/image/upload/f_auto,q_auto/v1/my-images/abhishekimage'
          alt='Description of image'
          className='h-auto w-full object-cover lg:rounded-lg'
        />
      </div>
    </div>
  );
};

export default Intro;
