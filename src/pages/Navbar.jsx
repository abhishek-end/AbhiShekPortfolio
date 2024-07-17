import React from "react";
import { Link } from "react-router-dom";
import { useCursor } from "./useCursor";
import "./../index.css";

const Navbar = () => {
  const { setIsTouchingLink } = useCursor();
  const handleMouseEnter = () => setIsTouchingLink(true);
  const handleMouseLeave = () => setIsTouchingLink(false);

    
  return (
    <>
      <nav className='bg-black px-20 py-10 w-full h-full'>
        <div className='flex justify-between items-center'>
          {/* <div className='text-white'>Logo</div> */}
          <div className='space-x-12 text-white uppercase font-gugi text-2xl'>
            <Link
              to={"/"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='underline-animation'
            >
              Home
            </Link>
            <Link
              to={"/work"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='underline-animation'
            >
              Work
            </Link>
            <Link
              to={"/about"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='underline-animation bubble'
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
