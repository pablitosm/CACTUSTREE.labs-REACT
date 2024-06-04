import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import Art from './components/Art';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import IntroVideo from './components/IntroVideo';

import CustomCursor from './js/CustomCursor';

import Intro from './projects/Intro';
import Zero from './projects/Zero';

import Photo from './gallery/Photo'
import Stills from './gallery/Stills';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function App() {
  useEffect(() => {
    const text = document.querySelector('.text');
    if (text) {
      text.innerHTML = text.innerText.split('').map((char, i) => {
        return `<span style="transform: rotate(${i * 11.3}deg)">${char}</span>`;
      }).join('');
    }
  }, []);

  return (
    <Router>
      <div>
        <CustomCursor />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/intro' && location.pathname !== '/zero';
  const showHeader = location.pathname !== '/intro' && location.pathname !== '/zero' && location.pathname !== '/projects' && location.pathname !== '/stills';

  return (
    <div className="container-noise">
      <IntroVideo />
      {showHeader && <Header />}
      <div className="noise"></div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/stills" element={<Stills />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/" element={
          <>
            <FrontPage />
            <Projects />
            <Art />
            <Contact />
            <div className="inner-cursor"></div>
            <div className="outer-cursor"></div>
            <div className="custom-text"></div>
          </>
        } />
      </Routes>
      <Analytics/>
      <SpeedInsights/>
    </div>
  );
}

export default App;
