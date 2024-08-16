import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom"; 

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const lenis = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      direction: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
    });

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.current = newLenis;

    return () => {
      newLenis.destroy();
    };
  }, []);

  useEffect(() => {
    lenis.current.stop();

    const timeout = setTimeout(() => {
      lenis.current.start();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
