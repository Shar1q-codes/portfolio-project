
import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import HeroComponent from './Components/HeroComponent';
import Portfolio from './Components/Portfolio';
import {BrowserRouter } from 'react-router-dom'
import Resume from './Components/Resume';
import People from './Components/People';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header  />
      <HeroComponent/>
      <AboutMe/>
      <Portfolio/>
      <Resume/>
      <People/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
