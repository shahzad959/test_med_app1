import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import './App.css';

function App() {
  return (
    <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing_Page/>}/>
                    <Route path="/signup" element={<Sign_Up />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                </Routes>    
                </div>
        </Router>
  );
}

export default App;
