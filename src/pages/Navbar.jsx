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
    className: "underline-animation text-white",
  };

  const navbar = useRef(null);
  const textRefs = useRef([]);
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
    <nav ref={navbar} className='py-3 w-full fixed top-0 justify-center  '>
      <div className='container m-auto  flex lg:justify-between  items-center border-b py-3 gap-2'>
        <div className='space-x-12 text-white uppercase font-gugi text-sm md:text-lg lg:text-xl   '>
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
          className='md:text-xl lg:text-xl sm:text-sm text-xl text-white font-bold capitalize underline-animation opacity-0 lg:opacity-100 italic font-[cursive]'
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
