import React, { useEffect, useRef } from "react";
import WorkButton from "./WorkButton.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LinkItem from "./Link.jsx";
const MyWork = () => {
  const data = [
    {
      text: "Machine Dalal",
      link: "https://machinedalal.com/",
    },
    {
      text: "Centurion Anesthesia",
      link: "https://stagingadmin.centurionanesthesia.com/auth/login",
    },

    {
      text: "VLC Android App Testing ",
      link: "https://github.com/abhishek-end/VLC-Andriod-Manual-Testing",
    },
    {
      text: "Personal Portfolio",
      link: "ab4ishekportfolio.vercel.app",
    },
    {
      text: "OpenCart",
      link: "https://github.com/abhishek-end/OpenCart",
    },
    {
      text: "Expanse Tracker",
      link: "https://github.com/abhishek-end/ManualTestsDocs",
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
      className=' w-full text-white h-screen   grid lg:grid-row-1 sm:mt-28 items-center transition-all
    p-5'
    >
      <div className='text-white text-4xl uppercase lg:text-8xl h-full  font-extrabold whitespace-wrap w-full grid items-end overflow-hidden'>
        <h4 ref={workRef}>WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div key={index} ref={(el) => (textRef.current[index] = el)}>
            <LinkItem text={item.text} link={item.link} />
          </div>
        ))}
        <div className='mt-10 md:px-6'>
          <WorkButton link='/work' text='Work' />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
