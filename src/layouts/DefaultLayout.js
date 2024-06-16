import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <HeroSection />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
