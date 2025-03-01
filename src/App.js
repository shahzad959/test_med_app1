
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';


import './App.css';

function App() {
  return (
    <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/landing-page" element={<LandingPage/>}/>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login/>} />
                </Routes>    
                </div>
        </Router>
  );
}

export default App;
