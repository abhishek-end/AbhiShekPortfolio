import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const GetInTouch = () => {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scrub: 2,
        start: "50% 50%",
        end: "100% 50%",
        pin: true,
        markers: true,
      },
    });
    tl.to("#top", { top: "-50%", opacity: 0, zIndex: -1 }, "a")
      .to("#bottom", { bottom: "-50%", opacity: 0, zIndex: -1 }, "a")
      // .to("#t-h1", { bottom: "10%" }, "a")
      // .to("#b-h1", { top: "-50%" }, "a")
      .fromTo("#center", { opacity: 0 }, { opacity: 1 }, "<");
  }, []);

  return (
    <div className='main h-screen w-full relative overflow-hidden '>
      <div
        id='top'
        className='w-full h-[50vh]  absolute top-0 overflow-hidden '
      >
        <h1
          id='t-h1'
          className='uppercase text-4xl md:text-6xl lg:text-[11rem] font-extrabold text-stroke text-transparent whitespace-nowrap'
        >
          get—in—touch
        </h1>
      </div>
      <div
        id='center'
        className='w-full h-screen  absolute flex items-center justify-center -z-30  border-t '
      >
        <div className='content bg-transparent'>
          <h4 className='text-4xl md:text-6xl lg:text-8xl text-white whitespace-nowrap '>
            HIRE ME!
          </h4>
          <h5>or just say hi</h5>
        </div>
      </div>
      <div
        id='bottom'
        className='w-full h-[50vh]  absolute bottom-0 overflow-hidden  '
      >
        <h1
          id='b-h1'
          className='uppercase text-4xl md:text-6xl lg:text-[11rem] font-extrabold text-stroke text-transparent whitespace-nowrap'
        >
          get—in—touch
        </h1>
      </div>
    </div>
  );
};

export default GetInTouch;
