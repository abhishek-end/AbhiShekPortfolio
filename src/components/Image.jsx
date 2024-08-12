import React from "react";
import image from "./../img/1000192870.png";
const Image = () => {
  return (
    <div className='lg:w-1/2 lg:h-screen mt-20 lg:mt-0 lg:flex lg:justify-center lg:items-center lg:p-0 p-4'>
      <img src={image} alt='' className=' lg:rounded-2xl rounded-sm' />
    </div>
  );
};

export default Image;
