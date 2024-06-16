import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function AdminDashboard() {
  return (
    <>
      <Navbar /> {/* Assuming Navbar is required in AdminDashboard */}
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default AdminDashboard;
