import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';
import LandingPage from './Components/LandingPage/landingpage.js';
import Signup from './Components/Signup/signup.js';
import Login from './Components/Login/login.js';
import InstantConsultation from '.Components/InstantConsultation/instantconsultation.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="instantconsult" element={<InstantConsultation/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;