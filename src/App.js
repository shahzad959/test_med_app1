import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import './App.css';

function App() {
  return (
    <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>    
                </div>
        </Router>
  );
}

export default App;
