import React, { useEffect, useRef } from "react";
import MainWork from "./MainWokr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    link: "",
    anchor: "https://github.com/abhishek-end/ManualTestsDocs",
    topic: "Expense Tracker Web App Testing",
    projectName: "Expense Tracker",
  },

  {
    link: "",
    anchor: "https://github.com/abhishek-end/OpenCart",
    topic: "OpenCart Open Source Testing",
    projectName: "OpenCart",
  },

  {
    link: "",
    anchor: "https://github.com/abhishek-end/VLC-Andriod-Manual-Testing",
    topic: "VLC android App Testing",
    projectName: "VLC android App Testing",
  },
  {
    link: "",
    anchor: "https://ab4ishekportfolio.vercel.app",
    topic: "Personal Portfolio",
    projectName: "Portfolio",
  },
];

const ParentWork = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const animations = imageRefs.current.map((ref, index) => {
      if (ref) {
        return gsap.fromTo(
          ref,
          {
            x: "-100%",
            opacity: 0,
          },
          {
            x: "0%",
            width: "100%",
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 50%",

              end: "bottom 30%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      return null;
    });
  }, []);

  return (
    <>
      <div className='min-h-screen w-full text-white flex items-center justify-evenly'>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {data.map((items, index) => (
            <div key={index} ref={(el) => (imageRefs.current[index] = el)}>
              <MainWork
                link={items.link}
                anchor={items.anchor}
                topic={items.topic}
                projectName={items.projectName}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParentWork;
