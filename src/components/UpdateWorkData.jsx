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
      icon: "https://www.salesforce.com/nl/blog/wp-content/uploads/sites/18/2019/09/ai-blog.jpg",
      text: "Lazarev Website Agencey ",
      link: "https://abhishek-end.github.io/lezrav-frontend/",
    },
    {
      icon: "https://www.medusa.jewelry/cdn/shop/products/rolex-cosmograph-daytona-40mm-meteorite-gold-montre-or-jaune-bijoux-medusa-homme-quebec-canada-415_800x.jpg?v=1679436438",
      text: "ROLEX WATCH Recreated",
      link: "https://abhishek-end.github.io/rolexWatch/",
    },
    {
      icon: "https://t4.ftcdn.net/jpg/04/01/79/63/360_F_401796363_cC2yOhHHGT0qhdO6CPFt40VptyHaMUuo.jpg",
      text: "Personal Portfolio",
      link: "ab4ishekportfolio.vercel.app",
    },
    {
      text: "Error 404 Project not found",
      link: "view",
    },
  ];

  return (
    <div
      className='w-full text-white min-h-screen sm:mt-16 flex flex-col transition-all
     lg:px-48 p-5 items-center justify-center'
    >
      <div className='text-white text-4xl uppercase lg:text-7xl h-1/2 font-extrabold whitespace-wrap w-full flex items-center '>
        <h4>MY WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full lg:p-6 border-b  mt-4 lg:mt-0 text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold
            '
          >
            <div className='hover:px-4 transition-all flex  w-full  justify-between h-full rounded-full items-center '>
              <h4 className=' mt-2 '>{item.text}</h4>
              <div className=''>
                <a
                  href={item.link}
                  target='_blank'
                  className='underline-animation'
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-5 md:px-6'>
          <WorkButton link='/work' text='Work' />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
