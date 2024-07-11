import { Link } from "react-router-dom";
import CursorFollower from "./useCursor";
const Navbar = () => {
  return (
    <CursorFollower>
      <nav className='bg-black px-5 py-6 w-full h-full'>
        <div className=' flex justify-center items-center'>
          <div className=' space-x-12 text-white uppercase font-gugi text-lg '>
            <Link to={"/"} className=' killer'>
              Home
            </Link>
            <Link to={"/work"} className=' killer'>
              Work
            </Link>
            <Link to={"/about"} className=' killer'>
              About
            </Link>
          </div>
        </div>
      </nav>
    </CursorFollower>
  );
};

export default Navbar;
