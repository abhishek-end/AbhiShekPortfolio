import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./pages/Navbar";
import Error from "./pages/Error";
import CursorFollower from "./hooks/useCursor.jsx";
import "./index.css";
const App = () => {
  return (
    <CursorFollower>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </CursorFollower>
  );
};

export default App;
