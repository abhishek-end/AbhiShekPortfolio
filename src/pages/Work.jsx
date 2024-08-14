import Circle from "./../components/Circle";
import GetInTouch from "./../components/GetInTouch";
import Footer from "./../components/Footer";
const Work = () => {
  return (
    <>
      <div className='   h-screen w-full bg-black lg:px-48 '>
        <div className='h-screen w-full flex justify-center items-center'>
          <h1 className='text-white lg:text-9xl uppercase '>
            here you see my work
          </h1>
        </div>
        <GetInTouch />
        <Footer />
        <Circle />
      </div>
    </>
  );
};

export default Work;
