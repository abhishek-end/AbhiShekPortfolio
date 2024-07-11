import React from "react";
import { Link } from "react-router-dom";
import { useCursor } from "./useCursor";

const Navbar = () => {
  const { setIsTouchingLink } = useCursor();

  const handleMouseEnter = () => {
    setIsTouchingLink(true);
  };

  const handleMouseLeave = () => {
    setIsTouchingLink(false);
  };

  return (
    <>
      <nav className='bg-black px-5 py-10 w-full h-full'>
        <div className='flex justify-center items-center'>
          <div className='space-x-12 text-white uppercase font-gugi text-lg'>
            <Link
              to={"/"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
            <Link
              to={"/work"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Work
            </Link>
            <Link
              to={"/about"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
