import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollegeInfo from './components/CollegeInfo';
import AdmissionForm from './components/AdmissionForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <div className="container">
        <div className="main-grid">
          <CollegeInfo />
          <AdmissionForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;