import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Name from "../components/Name";
import Circle from "./../components/Circle";
import ScrollMore from "../components/ScrollMore";
import Socailinks from "../components/Socailinks";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import MyWork from "../components/MyWork";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import "./../index.css";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      direction: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='container m-auto select-none'>
      <Name />
      <Circle />
      <section className='bg-black w-full flex items-start justify-center'>
        <ScrollMore />
      </section>
      <Intro />
      <div className='lg:px-48'>
        <Socailinks />
      </div>
      <Skills />
      <MyWork />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
