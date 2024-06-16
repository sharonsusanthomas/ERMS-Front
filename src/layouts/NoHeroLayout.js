import React from 'react';
import Footer from '../components/Footer';

const NoHeroLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default NoHeroLayout;
