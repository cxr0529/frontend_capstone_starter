import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';
import LandingPage from './Components/LandingPage/landingpage.js';
import Signup from './Components/Signup/signup.js';
import Login from './Components/Login/login.js';
import InstantConsultation from './Components/InstantConsultation/instantconsultation.js';
import BookingConsultation from './Components/bookingConsultation.js';
import Notification from './Components/Notification/notification.js';
import ReviewForm from './Components/ReviewForm/reviewform.js';
import ProfileForm from './Components/ProfileCard/profilecard.js';
import ReportLayout from './Components/ReportLayout/reportlayout.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Notification>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="instantconsult" element={<InstantConsultation/>}/>
                <Route path='booking' element={<BookingConsultation/>}/>
                <Route path='reviews' element={<ReviewForm/>}/>
                <Route path='profile' element={<ProfileForm/>}/>
                <Route path='report' element={<ReportLayout/>}/>
              </Routes>
            </Notification>
        </BrowserRouter>
       
    </div>
  );
}

export default App;