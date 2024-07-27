import React, { useState, useRef, useEffect } from "react";
import TailwindCSS from "./../assets/videos/ezgif.com-video-to-gif-converter.gif";
import html from "./../assets/videos/html.gif";
import sass from "./../assets/videos/sass-gif-converter.gif";

const Skills = () => {
  const h4Refs = useRef([]);
  const spanRefs = useRef([]);
  const [isHoverActive, setIsHoverActive] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHoverActive(index);
  };

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
        e.target.style.transform = "scale(1.4)";
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
    <div className='h-screen w-full flex items-center  bottom-80   px-48 relative '>
      <div className='h-1/2 w-1/2'>
        <div className='skill'>
          <h1 className='text-white text-9xl font-extrabold uppercase'>
            Skills <sub className='text-sm -mx-7'>{"{hover me}"}</sub>
          </h1>
        </div>
        <div className='flex gap-2 text-white text-4xl font-sans flex-col font-bold '>
          <div className='flex items-center justify-start mt-10 font-sans text-stroke  gap-2 text-transparent '>
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

          <div className='flex items-center justify-start mt-10 font-sans text-stroke  gap-1 text-transparent'>
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
          <div className='flex items-center justify-start mt-6 font-sans text-stroke uppercase gap-1 text-transparent'>
            <h4
              ref={(el) => (h4Refs.current[6] = el)}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              className='capitalize'
            >
              TailwindCSS
            </h4>
          </div>
          <div className='flex items-center justify-start mt-6'>
            <h1>& many skill Loading...</h1>
          </div>
        </div>
      </div>
      <div className='right-side-div w-1/2 h-1/2 relative flex justify-center items-center'>
        {[
          html,
          "https://blogs.purecode.ai/blogs/wp-content/uploads/2024/01/untitled7-1.gif",
          "https://media.tenor.com/TReUojNlZ6wAAAAi/js-javascript.gif",
          sass,
          "https://user-images.githubusercontent.com/97989643/220242520-78dd8232-4416-461a-a8f1-6c0b3f5f357f.gif",
          "https://cdn.mos.cms.futurecdn.net/252USFwhUaVeFm664hWzFA.jpg",
          TailwindCSS,
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gif for skill ${index}`}
            className={`w-full h-full absolute transition-opacity duration-300  rounded-lg ${
              isHoverActive === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
