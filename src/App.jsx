import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
          <Footer />
          </>
  );
};

export default App;