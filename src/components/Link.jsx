// LinkItem.jsx
import React from "react";

const LinkItem = ({ text, link }) => {
  return (
    <div className='w-full lg:p-6 border-b border-b-[#fac230] mt-4 lg:mt-0 text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold overflow-hidden'>
      <div className='hover:px-10 transition-all flex w-full justify-between h-full rounded-full items-center'>
        <h4 className='mt-2'>{text}</h4>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='underline-animation'
        >
          View
        </a>
      </div>
    </div>
  );
};

export default LinkItem;
