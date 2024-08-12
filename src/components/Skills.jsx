import React, { useState, useRef, useEffect, useCallback } from "react";
import TailwindCSS from "./../assets/videos/ezgif.com-video-to-gif-converter.gif";
import html from "./../assets/videos/html.gif";
import sass from "./../assets/videos/sass-gif-converter.gif";

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

  return (
    <div className='h-screen w-full flex flex-col lg:items-center  md:flex-row lg:flex-row  mt-60 lg:mt-10 relative lg:px-48  lg:p-6 '>
      <div className=' lg:h-1/2 lg:w-1/2 lg:bg-[#D3D5D4] lg:rounded-l-lg lg:px-3 '>
        <div className=' mb-6'>
          <h1 className='text-white lg:text-black text-5xl lg:text-9xl  font-extrabold  font-oswald uppercase '>
            Skills
            <sub
              className='text-sm lg:text-2xl whitespace-nowrap capitalize'
              style={{ opacity: fade, transition: "1s all ease-out" }}
            >
              {hover}
            </sub>
          </h1>
        </div>
        <div className='flex gap-2 text-white lg:w-10/12  text-3xl lg:text-4xl md:text-5xl font-mono flex-col font-bold bg-black rounded-lg lg:px-2'>
          <div className='flex  w-full h-full  mt-4 font-sans text-st gap-1 text-transparent lg:text-transparent]'>
            {["HTML", "CSS", "Javascript"].map((skill, index) => (
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

          <div className='flex items-center justify-start mt-10 font-sans text-st  gap-1 text-transparent lg:text-black'>
            {["SASS", "React JS", "GSAP"].map((skill, index) => (
              <React.Fragment key={index + 3}>
                <h4
                  ref={(el) => (h4Refs.current[index + 3] = el)}
                  onMouseEnter={() => handleMouseEnter(index + 3)}
                  onMouseLeave={handleMouseLeave}
                  className='capitalize'
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
          <div className='flex items-center justify-start mt-6 font-sans text-stroke uppercase gap-1 text-transparent lg:text-black '>
            <h4
              ref={(el) => (h4Refs.current[6] = el)}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              className='capitalize'
            >
              TailwindCSS
            </h4>
          </div>
          <div className='flex items-center justify-start mt-6 text-2xl lg:mb-4'>
            <h1>& Loading...</h1>
          </div>
        </div>
      </div>
      <div className='right-side-div h-full  w-full relative flex justify-center items-center mt-20 lg:mt-0 lg:bg-[#d3d5d4] lg:w-1/2 lg:h-1/2 rounded-r-lg'>
        <img
          src='https://cdn.dribbble.com/users/966681/screenshots/2896143/working.gif'
          alt=''
          className='p-2 w-full h-full'
        />
        {[
          html,
          "https://blogs.purecode.ai/blogs/wp-content/uploads/2024/01/untitled7-1.gif",
          "https://miro.medium.com/v2/resize:fit:3200/0*de0IdiUSoJTwgsys.gif",
          sass,
          "https://user-images.githubusercontent.com/97989643/220242520-78dd8232-4416-461a-a8f1-6c0b3f5f357f.gif",
          "https://cdn.mos.cms.futurecdn.net/252USFwhUaVeFm664hWzFA.jpg",
          TailwindCSS,
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gif for skill ${index}`}
            className={`w-full h-full absolute transition-opacity duration-300  roundd-r-lg ${
              isHoverActive === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
