import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/NavBar';
import Home from './pages/Home';
import About from './pages/About/About';
import Portfolio from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css'; // Ensure you have a global style if needed

const App = () => {
  return (
    <> 
  <Router> {/* Wrap the entire app with Router */}
    <Navbar /> {/* Your Navbar will now work */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>

  
  </>
   
  );
};

export default App;
