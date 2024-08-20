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

  return (
    <div className='h-screen sm:h-full w-full flex flex-col items-center lg:flex-row  mt-32 lg:mt-56 relative lg:px-48  lg:mb-0 '>
      <div className=' lg:h-3/5 lg:w-1/2 lg:rounded-l-lg lg:px-3  w-full h-full p-5 flex flex-col'>
        <div className='lg:mb-6 mb-5'>
          <h1 className='text-white text-5xl lg:text-9xl  font-extrabold  font-oswald uppercase lg:py-0 '>
            Skills
            <sub
              className='text-sm lg:text-2xl whitespace-nowrap capitalize'
              style={{ opacity: fade, transition: "1s all ease-out" }}
            >
              {hover}
            </sub>
          </h1>
        </div>
        <div className='flex gap-6  text-white lg:w-10/12 w-full text-2xl lg:text-4xl flex-col font-bold  lg:rounded-lg rounded-md lg:px-2 font-ariata'>
          <div className='flex w-full h-full mt-3 text-white gap-1'>
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

          <div className='flex items-center justify-start  gap-1 text-transparent text-white'>
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
          <div className='flex items-center justify-start'>
            <h4
              ref={(el) => (h4Refs.current[6] = el)}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              className='capitalize'
            >
              TailwindCSS
            </h4>
          </div>
          <div className='flex items-center justify-start '>
            <h1>& Loading...</h1>
          </div>
        </div>
      </div>
      <div className='right-side-div h-full  w-full relative flex justify-center items-center mt-20 lg:mt-0  lg:w-1/2 lg:h-3/5 rounded-r-lg'>
        <img
          src='https://cdn.dribbble.com/users/966681/screenshots/2896143/working.gif'
          alt=''
          className='w-full h-full object-contain'
        />
        {[
          "https://res.cloudinary.com/dlonoxpli/image/upload/v1723846684/my-images/pxd9xf5bvohyjt1q7wbx.webp",
          "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9t5cstaou0yjbh1gffj.gif",
          "https://media2.giphy.com/media/SvFocn0wNMx0iv2rYz/200w.gif?cid=6c09b952rw74ryzomkjlm8ph0v354blgc8ugtd87iemeddrk&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "https://res.cloudinary.com/dlonoxpli/image/upload/v1723846935/my-images/qgv9mqryxsyrevcy8fdh.gif",
          "https://res.cloudinary.com/dlonoxpli/image/upload/c_crop,g_center,h_0.88,w_0.55/my-images/eeeoshcfliwsezndnmxt.jpg",
          "https://res.cloudinary.com/dlonoxpli/image/upload/v1723845609/my-images/p2sh0isoxwdlaj3nd9fd.gif",
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
