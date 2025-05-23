import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useRef, useEffect, useCallback } from "react";
const Skills = () => {
  const h4Refs = useRef([]);
  const spanRefs = useRef([]);
  const [isHoverActive, setIsHoverActive] = useState(null);
  const [fade, setIsFade] = useState(1);
  const [hover, setIshover] = useState("{Hover Me}");

  const handleMouseEnter = useCallback(
    (index) => {
      setIsHoverActive(index);

      if (hover !== "Great") {
        setIshover("Great");

        setTimeout(() => {
          setIsFade(0);
        }, 1000);
      }
    },
    [hover]
  );

  const handleMouseLeave = () => {
    setIsHoverActive(null);
  };

  useEffect(() => {
    const h4Elems = h4Refs.current;
    const spans = spanRefs.current;

    const handleMouseIn = (e) => {
      spans.forEach((spani) => {
        spani.style.opacity = spani !== e.target ? "0.1" : "1";
      });
      h4Elems.forEach((h4) => {
        if (h4 !== e.target) {
          h4.style.opacity = "0.5";
          h4.style.transition = "0.2s ease";
          h4.style.zIndex = "99";
        }
        e.target.style.transform = "scale(1.2)";
        e.target.style.transition = ".2s ease";
      });
    };

    const handleMouseOut = (e) => {
      spans.forEach((element) => {
        element.style.opacity = "1";
        ``;
        element.style.transition = ".2s ease";
      });

      h4Elems.forEach((h4) => {
        h4.style.opacity = "1";
        h4.style.transition = "0.2s ease";
      });
      e.target.style.transform = "scale(1)";
      e.target.style.transition = ".2s ease";
    };

    h4Elems.forEach((el) => {
      el.addEventListener("mouseover", handleMouseIn);
      el.addEventListener("mouseout", handleMouseOut);
    });
  }, []);

  const textRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 30%",
        },
      })
      .from(textRef.current, {
        y: "100",
        duration: 0.5,
        opacity: 0,

        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  const imageRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: "-90%",
        opacity: 0,
      },
      {
        x: "0%",
        // width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          // markers: true,
          end: "bottom 30%",
          toggleActions: "play none none none",
          // scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className=' h-full w-full flex flex-col  sm:flex-row  md:mt-52 relative p-4 mt-24 gap-10 '>
      <div className='sm:w-1/2 overflow-visible flex flex-col '>
        <div className=' w-full overflow-hidden   flex items-center md:h-1/3 mb-5 '>
          <h1
            className='text-white text-6xl md:text-7xl  font-extrabold  font-oswald uppercase lg:py-0 p-2'
            ref={(el) => (textRef.current[0] = el)}
          >
            Skills
            <sub
              className='text-sm lg:text-2xl whitespace-nowrap capitalize mb-2'
              style={{ opacity: fade, transition: "1s all ease-out" }}
            >
              {hover}
            </sub>
          </h1>
        </div>
        <div className='flex gap-3 justify-center text-white w-full md:text-3xl text-xl flex-col font-bold rounded-md font-ariata h-full md:w-full'>
          {/* Block 1: BlackBox, Functional, System */}
          <div
            className='flex w-full p-2 items-center text-white gap-1'
            ref={(el) => (textRef.current[1] = el)}
          >
            {["BlackBox", "Functional", "System"].map((skill, index) => (
              <React.Fragment key={index}>
                <h4
                  ref={(el) => (h4Refs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {skill}
                </h4>
                {index < 2 && (
                  <span ref={(el) => (spanRefs.current[index] = el)}>—</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Block 2: Smoke, Sanity, Regression */}
          <div
            className='flex items-center justify-start gap-1 text-white p-1'
            ref={(el) => (textRef.current[2] = el)}
          >
            {["Smoke", "Sanity", "Regression"].map((skill, index) => (
              <React.Fragment key={index + 3}>
                <h4
                  ref={(el) => (h4Refs.current[index + 3] = el)}
                  onMouseEnter={() => handleMouseEnter(index + 3)}
                  onMouseLeave={handleMouseLeave}
                >
                  {skill}
                </h4>
                {index < 2 && (
                  <span ref={(el) => (spanRefs.current[index + 2] = el)}>
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Block 3: SDLC, STLC, BLC */}
          <div
            className='flex items-center justify-start gap-1 text-white p-1'
            ref={(el) => (textRef.current[3] = el)}
          >
            {["SDLC", "STLC", "BLC"].map((skill, index) => (
              <React.Fragment key={index + 6}>
                <h4
                  ref={(el) => (h4Refs.current[index + 6] = el)}
                  onMouseEnter={() => handleMouseEnter(index + 6)}
                  onMouseLeave={handleMouseLeave}
                  className='capitalize'
                >
                  {skill}
                </h4>
                {index < 2 && (
                  <span ref={(el) => (spanRefs.current[index + 4] = el)}>
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Block 4: Agile, Scrum, JIRA */}
          <div
            className='flex items-center justify-start gap-1 text-white p-1'
            ref={(el) => (textRef.current[5] = el)}
          >
            {["Agile", "Scrum", "JIRA"].map((skill, index) => (
              <React.Fragment key={index + 9}>
                <h4
                  ref={(el) => (h4Refs.current[index + 9] = el)}
                  onMouseEnter={() => handleMouseEnter(index + 9)}
                  onMouseLeave={handleMouseLeave}
                  className='capitalize'
                >
                  {skill}
                </h4>
                {index < 2 && (
                  <span ref={(el) => (spanRefs.current[index + 7] = el)}>
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Block 5: Test Designs */}
          <div
            className='flex items-center justify-start gap-1'
            ref={(el) => (textRef.current[4] = el)}
          >
            {["Zephyr","Test Designs", "Retesting"].map((skill, index) => (
              <React.Fragment key={index + 12}>
                <h4
                  ref={(el) => (h4Refs.current[index + 12] = el)}
                  onMouseEnter={() => handleMouseEnter(index + 12)}
                  onMouseLeave={handleMouseLeave}
                  className='capitalize'
                >
                  {skill}
                </h4>
                {index < 2 && (
                  <span ref={(el) => (spanRefs.current[index + 10] = el)}>
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='right-side-div h-full  w-full relative flex justify-center items-center mt-20 lg:mt-0  md:w-2/5  rounded-r-lg overflow-hidden bg-black opacity-70'>
        <img
          ref={imageRef}
          src='https://cdn.dribbble.com/users/966681/screenshots/2896143/working.gif'
          alt=''
          className='w-full h-full object-cover border-8 rounded-2xl border-[#fac243] '
        />
      </div>
    </div>
  );
};

export default Skills;
