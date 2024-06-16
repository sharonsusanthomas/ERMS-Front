import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import StaffDashboard from './components/pages/StaffDashboard';
import HoDDashboard from './components/pages/HoDDashboard';
import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/staff-dashboard' element={<StaffDashboard />} />
        <Route path='/hod-dashboard' element={<HoDDashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
