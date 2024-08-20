import React from "react";
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
  return (
    <div className='container mx-auto select-none'>
      <Name />
      <Circle />
      <section className='bg-black w-full flex items-start justify-center'>
        <ScrollMore />
      </section>
      <Intro />
      <div className='lg:px-48 lg:mt-3 flex justify-start items-center'>
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
