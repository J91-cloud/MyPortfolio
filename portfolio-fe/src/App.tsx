import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/layout/NavBar';
import Home from './pages/Home';
import  "./App.css"

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <Navbar /> {/* Your Navbar will now work */}
      <Home />
    </Router>
  );
};

export default App;
