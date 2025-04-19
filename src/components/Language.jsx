import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Language = () => {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const greetings = ["नमस्ते", "Hello", "Bonjour", "Hola"];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        },
      })
      .from(textRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate the current text out
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => {
          // Update the text and animate it in
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          gsap.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
          );
        },
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [greetings.length]);
  return (
    <div className='h-screen w-full mt-16 sm:mt-24 '>
      <div className='h-full w-full flex  flex-col justify-center items-center '>
        <div className='h-1/2 w-full flex justify-center items-center '>
          <h4
            className={`text-white text-5xl sm:text-6xl lg:text-9xl font-extrabold tracking-widest uppercase transition-transform   ease-linear`}
            ref={textRef}
          >
            {greetings[currentIndex]}
          </h4>
        </div>
        <div className='text-3xl text-white sm:text-4xl sm:leading-10 md:text-5xl  lg:w-5/6 leading-normal  break-words w-full h-full overflow-hidden'>
          <h4 className='text-pretty whitespace-nowrap text-center font-paytone leading-relaxed'>
            Hiii, I'm Abhishek, a QA Tester who lives to break things—so users
            don’t have to. I dive deep into features, hunt bugs like a
            detective, I craft detailed test cases, break things gracefully, and
            make sure bugs never get past me."
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Language;
