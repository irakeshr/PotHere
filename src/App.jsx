import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Shop from './components/Pages/Shop'; // Make sure this import exists
import './App.css';
import AboutSection from './components/Pages/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar stays outside of Routes */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutSection/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
