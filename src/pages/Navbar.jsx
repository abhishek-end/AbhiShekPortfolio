import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
    className:
      "underline-animation text-white transition-all duration-300 hover:text-gray-300",
  };

  const navbar = useRef(null);
  const textRef = useRef([]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.5,
    });
  }, []);

  const location = useLocation();
  useEffect(() => {
    const gsapKill = gsap.to(navbar.current, {
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
      gsapKill.kill();
    };
  }, [location]);

  return (
    <nav
      ref={navbar}
      className='py-3 w-full fixed top-0 justify-center px-5 sm:px-0 '
    >
      <div className='container m-auto  flex justify-between  items-center border-b py-3 gap-2'>
        <div
          className='space-x-12 text-white uppercase font-gugi text-sm md:text-lg lg:text-xl'
          ref={(el) => (textRef.current[0] = el)}
        >
          <Link to={"/"} {...commonProps}>
            Home
          </Link>
          <Link to={"/about"} {...commonProps}>
            About
          </Link>
          <Link to={"/work"} {...commonProps}>
            Work
          </Link>
        </div>
        <div
          onMouseOver={handleTouch}
          onMouseLeave={removeTouch}
          ref={(el) => (textRef.current[1] = el)}
        >
          <a
            href={
              "https://drive.google.com/file/d/1KhZ5DJcq8TJedxkizEGpv8k8KRsiIQe3/view?usp=sharing"
            }
            download='abhishek_yadav_resume.pdf'
            className='md:text-xl lg:text-xl sm:text-sm text-xl text-[#fac230] font-bold  underline-animation  font-mono'
            onMouseOver={handleTouch}
            onMouseLeave={removeTouch}
            ref={(el) => (textRef.current[1] = el)}
          >
            /resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
