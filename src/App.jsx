import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import backgroundImage from './assets/bg-image.jpg';

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND WAVY LINES ================= */}
      {/* Set to 'fixed' so it covers and displays behind the entire website layout */}
      <div className="fixed inset-0 pointer-events-none z-0">
  <img
    src={backgroundImage}
    alt="Background"
    className="w-full h-full object-cover-contain"
  />
</div>

      {/* ================= WEBSITE FOREGROUND INTERFACE ================= */}
      <div className="relative z-10 w-full min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </div>
  );
};

export default App;