import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./pages/Navbar";
import Error from "./pages/Error";
import CursorFollower from "./hooks/useCursor.jsx";
import "./index.css";
import WorkButton from "./components/WorkButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Lenis from "lenis";
const App = () => {
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
    <CursorFollower>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='*' element={<Error />} />
          <Route path='/workbutton' element={<WorkButton />} />
        </Routes>
      </Router>
    </CursorFollower>
  );
};

export default App;
