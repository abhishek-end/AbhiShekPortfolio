import React, { useEffect, useRef } from "react";
import WorkButton from "./WorkButton.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const MyWork = () => {
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
  const textRef = useRef([]);
  const workRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none", //
        },
      })
      .from(textRef.current, {
        y: 100,
        opacity: 0,
        delay: 0.1,
        marker: true,
        duration: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none", //
        },
      })
      .from(workRef.current, {
        y: 100,
        opacity: 0,
        delay: 0.1,
        marker: true,
        duration: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  return (
    <div
      className=' w-full text-white h-screen  sm:mt-32 flex flex-col transition-all
     lg:px-48 p-5'
    >
      <div className='text-white text-4xl uppercase lg:text-9xl h-1/4  font-extrabold whitespace-wrap w-full flex items-end overflow-hidden'>
        <h4 ref={workRef}>WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full lg:p-6 border-b  mt-4 lg:mt-0 text-sm md:text-xl lg:text-2xl capitalize font-gugi font-semibold overflow-hidden
            '
            ref={(el) => (textRef.current[index] = el)}
          >
            <div className='hover:px-10 transition-all flex  w-full  justify-between h-full rounded-full items-center '>
              <h4 className=' mt-2 '>{item.text}</h4>

              <a
                href={item.link}
                target='_blank'
                className='underline-animation'
              >
                View
              </a>
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
