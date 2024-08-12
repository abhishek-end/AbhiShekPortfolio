import React from "react";
import Circle from "./../components/Circle";
import ScrollMore from "../components/ScrollMore";
import Name from "../components/Name";
import "./../index.css";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
// import MyWork from "../components/MyWork";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Socailinks from "../components/Socailinks";
const Home = () => {
  return (
    <div className='container m-auto select-none'>
      <Name />
      <Circle />
      <section className='bg-black w-full  flex items-start justify-center'>
        <ScrollMore />
      </section>
      <Intro />
      <div className='lg:px-48 '>
        <Socailinks />
      </div>
      <Skills />
      {/* <MyWork /> */}
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
