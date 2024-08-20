import { useState, useEffect } from "react";

const Language = () => {
  const greetings = [
    "नमस्ते",
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Konnichiwa",
    "Ni hao",
    "Annyeonghaseyo",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransition(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setIsTransition(false);
      }, 500);
    }, 2200);
    return () => {
      clearInterval(interval);
    };
  }, [greetings.length]);
  return (
    <div className='h-screen w-full mt-16 sm:mt-24 '>
      <div className='h-full w-full flex  flex-col justify-center items-center '>
        <div className={`h-1/2 w-full flex justify-center items-center `}>
          <h4
            className={`text-white text-5xl sm:text-6xl lg:text-9xl font-extrabold tracking-widest uppercase transition-transform   ease-linear ${
              isTransition
                ? "-translate-y-full  opacity-0 "
                : "-translate-y-0   opacity-100"
            }`}
          >
            {greetings[currentIndex]}
          </h4>
        </div>
        <div className='text-3xl text-white sm:text-4xl sm:leading-10 md:text-5xl  lg:w-5/6 leading-normal  break-words w-full h-full'>
          <h4 className='text-pretty whitespace-nowrap text-center font-paytone leading-relaxed'>
            I am frontend developer from India, passionate about creating
            Specializing in animations and motion, I merge creativity with
            technology to craft visually appealing and interactive user
            experiences.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Language;
