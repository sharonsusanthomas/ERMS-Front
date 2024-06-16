import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button'; // Assuming Button component is correctly defined
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to '/login' route
  };

  return (
    <div className='hero-container'>
      
      <h1>CHRIST UNIVERSITY</h1>
      <p>EVENT MANAGEMENT SYSTEM?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleGetStarted}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
