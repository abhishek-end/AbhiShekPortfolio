import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useCursor } from "../hooks/useCursor";
const GetInTouch = () => {
  const { setIsTouchingLink } = useCursor();

  const handleMouseEnter = () => setIsTouchingLink(true);
  const handleMouseLeave = () => setIsTouchingLink(false);
  const eventHandlers = {
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: "underline-animation scaleX",
  };
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scrub: 2,
        start: "50% 50%",
        end: "100% 50%",
        pin: true,
      },
    });
    tl.to("#top", { top: "-50%" }, "a")
      .to("#bottom", { bottom: "-50%" }, "a")
      .to("#t-h1", { bottom: "50%" }, "a")
      .to("#b-h1", { bottom: "-50%" }, "a")
      .to("#center", { top: "-50%" }, "a");
    // .fromTo("#center", { opacity: 0 }, { opacity: 1 }, "<");
  }, []);

  return (
    <div className='main h-screen w-full relative overflow-hidden rounded-sm lg:flex lg:justify-center  '>
      {/* top-div */}
      <div
        id='top'
        className='w-full h-[50vh] absolute top-0 overflow-hidden lg:bg-[#D3D5D4] p-2'
      >
        <h1
          id='t-h1'
          className='uppercase text-4xl md:text-6xl lg:text-[12rem] font-extrabold  lg:text-black font-oswald text-st whitespace-nowrap'
        >
          get-in-touch
        </h1>
      </div>

      {/* Center div*/}

      <div
        id='center'
        className='w-full h-screen bg-black absolute flex justify-center items-end  -z-10 mt-[31rem]'
      >
        <div className='content flex flex-col w-full '>
          <h4 className='text-4xl md:text-6xl lg:text-9xl font-extrabold text-white whitespace-nowrap font-oswald text-center'>
            HIRE ME!
          </h4>

          <div className='image flex justify-center  '>
            <img
              src='https://i.gifer.com/origin/e0/e08f73642d422d94483c0ca96f737ac2_w200.gif'
              alt=''
              className=''
            />
          </div>
          <h5 className='text-white text-center mb-10 text-xl uppercase font-oswald'>
            or Just say hi
          </h5>
          <div className='font-extrabold   text-white text-center flex flex-col justify-center '>
            <div className='w-full h-full border-t py-4 flex justify-center items-center text-5xl gap-4'>
              <div {...eventHandlers}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href='mailto:abhishekyadav49534@gmail.com'>
                  abhishekyadav49534@gmail.com
                </a>
              </div>
            </div>
            <div className='w-full h-full border-t py-4 flex justify-center items-center text-5xl gap-5 '>
              <div {...eventHandlers}>
                <FontAwesomeIcon
                  icon={faMobileButton}
                  className='border-none mb-1'
                />
                <a href='tel:+919138601445'>+91 91386-01445</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div
        id='bottom'
        className='w-full h-[50vh] absolute bottom-0 overflow-hidden lg:bg-[#D3D5D4]'
      >
        <h1
          id='b-h1'
          className='uppercase text-4xl md:text-6xl lg:text-[12rem] font-extrabold text-stroke lg:text-black whitespace-nowrap font-oswald'
        >
          get-in-touch
        </h1>
      </div>
    </div>
  );
};

export default GetInTouch;
