import React, { useEffect, useRef } from "react";
import WorkButton from "./WorkButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Socailinks from "./Socailinks";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const helloWorldRef = useRef([]);
  const bioRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: helloWorldRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none", //
        },
      })
      .from(helloWorldRef.current, {
        y: 100,
        opacity: 0,
        delay: 0.1,
        duration: 1.5,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      bioRef.current,
      { opacity: 0.4 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        },
      }
    );
  });
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className='flex h-full  w-full mt-80 flex-col md:flex-row md:relative p-4'>
      <div className='  md:w-1/2 '>
        <div className='text-white  text-7xl font-bold font-oswald  md:h-fit overflow-hidden'>
          <h4 ref={(el) => (helloWorldRef.current[0] = el)}>
            HELLO <br />
            WORLD
          </h4>
        </div>
        <div className=' text-white text-xl flex rounded-lg lg:p-2 w-11/12 lg:w-full whitespace-wrap font-spacemono   mt-12 lg:mt-4 select-none  '>
          <h4
            className='lg:w-1/2  h-full  lg:p-2 px-2 rounded-lg lg:mt-0 mb-5'
            ref={bioRef}
          >
            "Hiii, I'm Abhishek, a Full Stack Developer who loves design and
            crafts websites with engaging animations." {"(;"}
          </h4>
        </div>
        <div
          className='text-white mb-5'
          ref={(el) => (helloWorldRef.current[1] = el)}
        >
          <WorkButton link='/about' text='More' />
        </div>
      </div>
      <div className='md:w-1/2 overflow-hidden'>
        <img
          src='https://res.cloudinary.com/dlonoxpli/image/upload/v1724053009/my-images/xrh1j3ymgaumx3vp8wkn.png'
          alt='Description of image'
          className='h-auto w-full object-cover lg:rounded-lg border-8 border-[#F3CA20] rounded-sm '
          ref={imageRef}
        />
      </div>
      <Socailinks />
    </div>
  );
};

export default Intro;
