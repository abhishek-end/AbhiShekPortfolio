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
    className: "underline-animation",
  };
  const navbar = useRef(null);
  const textRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    gsap.to(navbar.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: navbar.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
      duration: 0.5,
      ease: "power1.inOut",
    });

    tl.to(textRefs.current, {
      opacity: 0,
      yPercent: -100,
      // duration: 1,
      scrollTrigger: {
        trigger: navbar.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav ref={navbar} className='py-10 w-full fixed top-0 left-0 z-50 '>
      <div className='container m-auto  flex justify-between items-start border-b-[1px] '>
        <div className='space-x-12 text-white uppercase font-gugi mb-9 sm:text-lg md:text-xl lg:text-2xl '>
          <Link
            to={"/"}
            {...commonProps}
            ref={(el) => (textRefs.current[0] = el)}
          >
            Home
          </Link>
          <Link
            to={"/work"}
            {...commonProps}
            ref={(el) => (textRefs.current[1] = el)}
          >
            Work
          </Link>
          <Link
            to={"/about"}
            {...commonProps}
            ref={(el) => (textRefs.current[2] = el)}
          >
            About
          </Link>
        </div>
        <div
          className='text-2xl font-mono text-transparent text-stroke underline-animation '
          onMouseOver={handleTouch}
          onMouseLeave={removeTouch}
        >
          /2002/05/08
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
