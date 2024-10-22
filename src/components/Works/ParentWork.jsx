import React, { useEffect, useRef } from "react";
import MainWork from "./MainWokr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    link: "https://img.freepik.com/free-photo/aesthetic-spring-wallpaper-with-carnation-high-angle_23-2149446748.jpg?w=740&t=st=1728764641~exp=1728765241~hmac=a517357ae608ff4ab467dcd3dccbc9b39daf21c5be2ca51c44e7b358ed0b4090",
    anchor: "https://expense-traker-six.vercel.app/",
    topic: "Expense Tracker",
    projectName: "Expense Tracker",
  },

  {
    link: "https://www.shutterstock.com/image-photo/beautiful-pastel-peachy-gerbera-flowers-600nw-2398912687.jpg",
    anchor: "https://apple-3d-omega.vercel.app/",
    topic: "3D iPhone 15 pro ",
    projectName: "3D Iphone 15 pro Three.js",
  },
  {
    link: "https://img.freepik.com/free-photo/beautiful-purple-flowers-vase_23-2149446785.jpg?size=626&ext=jpg&ga=GA1.1.344882661.1728764257&semt=ais_hybrid-rr-similar",
    anchor: "https://ab4ishekportfolio.vercel.app",
    topic: "Personal Portfolio",
    projectName: "Portfolio",
  },
  {
    link: "https://img.freepik.com/free-photo/front-view-daisy-flower-stand-with-copy-space_23-2149270717.jpg?semt=ais_hybrid",
    anchor: "https://abhishek-end.github.io/lezrav-frontend/",
    topic: "LaZarev Agency ",
    projectName: "LaZarev Agency ",
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
      <div className='min-h-screen w-full '>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2  gap-8'>
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
