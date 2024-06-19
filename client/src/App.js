import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Home from './pages/pamuditha/home'; 
import SelectServices from './pages/navodya/SelectServices';
import SelectProfessional from './pages/navodya/SelectProfessional';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Appoinment" element={<SelectServices />} />
        <Route path="/Appoinment/professional" element={<SelectProfessional />} />
        
      </Routes>
    </Router>
  );
}

export default App;
