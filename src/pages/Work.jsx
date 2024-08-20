import Circle from "./../components/Circle";
import GetInTouch from "./../components/GetInTouch";
import Footer from "./../components/Footer";
import UpdateWorkData from "./../components/UpdateWorkData.jsx";
const Work = () => {
  return (
    <div className="lg:px-48">
      <UpdateWorkData />
      <GetInTouch />
      <Footer />
      <Circle />
    </div>
  );
};

export default Work;
