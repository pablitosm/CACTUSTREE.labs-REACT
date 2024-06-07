import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [imageSrc, setImageSrc] = useState('/img/projects-text.png');

  useEffect(() => {
    const handleClassChange = () => {
      if (document.body.classList.contains('dark')) {
        setImageSrc('/img/projects-text-white.png');
      } else {
        setImageSrc('/img/projects-text.png');
      }
    };

    // Initialize the correct image based on the initial class of the body
    handleClassChange();

    // Create a mutation observer to watch for changes to the class attribute on the body
    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects terceraImagen" id="projects">
      <img className="projects-section-image" src={imageSrc} alt="" />
      <hr />
      <div className="fila" id="contenido3">
        <div className="foto" id="projects1">
          <Link to="/intro">
            <div className="imagen1 position-relative">
              <img src="/img/webp_images/index/intro_1.1.3.webp" alt="Intro project" />
              <div className="project-text stills">INTRO</div>
              <div className="project-text view-more">VIEW MORE &#8677;</div>
            </div>
            <div className="imagen1-hover">
              <img src="/media/teaser_intro.gif" alt="GIF" />
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
              <img src="/media/teaser_zero.gif" alt="GIF" />
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
              <img src="/media/teaser_ski.gif" alt="GIF" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;