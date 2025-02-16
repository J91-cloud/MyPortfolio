import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Projects/Projects";
import AcceptComments from "./Components/comments/AcceptComments";
import Contact from "./pages/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commentDashboard" element={<AcceptComments />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
