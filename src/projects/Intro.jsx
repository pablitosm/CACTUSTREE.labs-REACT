import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="bodyProyecto1">
      <div id="contenido5">
        <header style={{ position: 'absolute', top: 0, left: 0 }}>
          <nav>
            <Link to="/">
              <img className="logo" src="/img/principal/logo.png" alt="logo" />
            </Link>
            <ul className="navBarProyectos">
              <li><Link to="/#projects">PROJECTS</Link></li>
              <li><Link to="/#art">ART</Link></li>
              <li><Link to="/#contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="ceroImagen"></div>

      <div className="textContainerProyecto1">
        <h2 className="titulo2Texto">INTRO</h2>
        <div className="foto2 image1Proyecto1">
          <div className="videoIframe" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/903441649?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              title="intro"
            ></iframe>
          </div>
          <p className="pieFoto">("INTRO" is the story of a teenage girl who is going through a 
            bad period in her life, she has just had a breakup and it is not being easy for 
            her to get over it. In the video you can see how she tries to be well and enjoy 
            her life going out partying, but in her head she can't help but think about her 
            ex-partner.)</p>
        </div>
      </div>

      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>

      <footer>
        <p>CACTUSTREE.labs™</p>
        <a href="https://www.instagram.com/cactustree.labs/" target="_blank" rel="noopener noreferrer">
          <img className="imageFooter" src="/img/about/foto_copy.png" alt="Instagram" />
        </a>
      </footer>
    </div>
  );
}

export default Intro;
