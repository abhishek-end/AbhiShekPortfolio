import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./../index.css";
import { useCursor } from "./../hooks/useCursor";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const { setIsTouchingLink } = useCursor();

  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const commonProps = {
    onMouseEnter: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation text-white",
  };
  const navbar = useRef(null);
  const textRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    gsap.set(textRefs.current, { opacity: 1, yPercent: 0 });
    gsap.to(navbar.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: navbar.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play ",
      },
      duration: 0.5,
      ease: "power1.inOut",
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav
      ref={navbar}
      className='py-4 h-full w-full fixed top-0 justify-center  '
    >
      <div className='container m-auto  flex lg:justify-between  items-center border-b py-4 gap-2'>
        <div className='space-x-12 text-white uppercase font-gugi sm:text-lg md:text-xl lg:text-2xl   '>
          <Link
            to={"/"}
            {...commonProps}
            ref={(el) => (textRefs.current[0] = el)}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            {...commonProps}
            ref={(el) => (textRefs.current[1] = el)}
          >
            About
          </Link>
          <Link
            to={"/work"}
            {...commonProps}
            ref={(el) => (textRefs.current[2] = el)}
          >
            Work
          </Link>
        </div>
        <div
          className='md:text-xl lg:text-2xl sm:text-sm text-xl text-white font-bold capitalize underline-animation opacity-0 lg:opacity-100 italic font-[cursive]'
          onMouseOver={handleTouch}
          onMouseLeave={removeTouch}
        >
          /resume
        </div>
      </div>
    </nav>
  );  
};

export default Navbar;
