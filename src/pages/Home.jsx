import React from "react";
import Circle from "./../components/Circle";
import ScrollMore from "../components/ScrollMore";
import Name from "../components/Name";
import "./../index.css";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import MyWork from "../components/MyWork";

const Home = () => {
  return (
    <div className='container m-auto'>
      <Name />
      <Circle />
      <section className='bg-black w-full  flex items-start justify-center'>
        <ScrollMore />
      </section>
      <Intro />
      <Skills />
      <MyWork />
    </div>
  );
};

export default Home;
