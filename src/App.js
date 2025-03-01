import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearchIC from './Components/FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './Components/DoctorCardIC/DoctorCardIC';
import AppointmentFromIC from './Components/AppointmentFormIC/AppointmentFormIC';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';

import './App.css';

function App() {
  return (
    <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/signup" element={<Sign_Up />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/find-doctor-search-IC" element={<FindDoctorSearchIC/>} />
                    <Route path="/doctor-card-IC" element={<DoctorCardIC/>}/>
                    <Route path="/appointment-form-IC" element={<AppointmentFromIC/>}/>
                    <Route path="/notification" element={<Notification/>}/>
                    <Route path="/review-from" element={<ReviewForm/>}/>
                </Routes>    
                </div>
        </Router>
  );
}

export default App;
