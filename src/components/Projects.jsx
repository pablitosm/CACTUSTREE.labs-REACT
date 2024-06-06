import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects terceraImagen" id="projects">
      {/* <div className='projects-section'> */}
        <img className="projects-section-image" src="/img/projects-text.png" alt="" />
        <hr />
      {/* </div> */}
      <div className="fila" id="contenido3">
        <div className="foto" id="projects1">
          <Link to="/intro">
            <div className="imagen1 position-relative">
              <img src="/img/webp_images/index/intro_1.1.3.webp" alt="Intro project" />
              <div className="project-text stills">INTRO</div>
              <div className="project-text view-more">VIEW MORE &#8677;</div>
            </div>
            <div className="imagen1-hover">
              <video autoPlay muted loop playsInline style={{ width: '100%' }} onMouseOver={(e) => e.target.play()}>
                <source src="/media/teaser_intro.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
        <div className="foto" id="projects2">
          <Link to="/zero">
            <div className="imagen1 position-relative">
              <img src="/img/webp_images/index/web_1.7.1.webp" alt="Zero project" />
              <div className="project-text zero">ZERO</div>
              <div className="project-text view-more">VIEW MORE &#8677;</div>
            </div>
            <div className="imagen1-hover">
              <video autoPlay muted loop playsInline style={{ width: '100%' }} onMouseOver={(e) => e.target.play()}>
                <source src="/media/teaser_zero.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
        <div className="foto" id="projects3">
          <Link to="/ski">
            <div className="imagen1 position-relative">
              <img src="/img/ski5.webp" alt="Intro project" />
              <div className="project-text stills" style={{color : "#0e1111"}}>TEBAY</div>
              <div className="project-text view-more" style={{color : "#0e1111"}}>VIEW MORE &#8677;</div>
            </div>
            <div className="imagen1-hover">
              <video autoPlay muted loop playsInline style={{ width: '100%' }} onMouseOver={(e) => e.target.play()}>
                <source src="/media/teaser_ski.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;