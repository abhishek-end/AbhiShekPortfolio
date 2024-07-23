import React from "react";
import Circle from "./../components/Circle";
import ScrollMore from "../components/ScrollMore";
import Name from "../components/Name";
import "./../index.css";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className='container m-auto'>
      <Name />
      <Circle />
      <section className='bg-black w-full  flex items-start justify-center'>
        <ScrollMore />
      </section>
      <Intro />
    </div>
  );
};

export default Home;
