import React, { useState } from 'react';

function HeaderProjects() {
  const [projectsText, setProjectsText] = useState('PROJECTS');
  const [artGalleryText, setArtGalleryText] = useState('ART.GALLERY');
  const [contactText, setContactText] = useState('CONTACT');

  const handleProjectsMouseEnter = () => {
    const random = Math.random();
    if (random < 0.5) {
      setProjectsText('PROJ3CTS');
    } else {
      setProjectsText('PR*JECTS');
    }
  };

  const handleProjectsMouseLeave = () => {
    setProjectsText('PROJECTS');
  };

  const handleArtGalleryMouseEnter = () => {
    const random = Math.random();
    if (random < 0.5) {
      setArtGalleryText('ART.G@LLERY');
    } else {
      setArtGalleryText('ART.GALL3RY');
    }
  };

  const handleArtGalleryMouseLeave = () => {
    setArtGalleryText('ART.GALLERY');
  };

  const handleContactMouseEnter = () => {
    const random = Math.random();
    if (random < 0.5) {
      setContactText('C0NTACT');
    } else {
      setContactText('CONT@CT');
    }
  };

  const handleContactMouseLeave = () => {
    setContactText('CONTACT');
  };

  return (
    <nav className="navbar-index" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 10000 }}>
      <div className="container-navegacion">
        <div className="navbar-top">
          <ul>
            <div className="navbar-left-intro">
              <li>
                <a
                  href="/#projects"
                  className="nav-link projects-navbar"
                  data-section-name="PROJECTS"
                  onMouseEnter={handleProjectsMouseEnter}
                  onMouseLeave={handleProjectsMouseLeave}
                >
                  {projectsText}
                </a>
              </li>
              <li>
                <a
                  href="/#art"
                  className="nav-link"
                  data-section-name="ART GALLERY"
                  onMouseEnter={handleArtGalleryMouseEnter}
                  onMouseLeave={handleArtGalleryMouseLeave}
                >
                  {artGalleryText}
                </a>
              </li>
            </div>
            <div className="navbar-right-intro">
              <li>
                <a
                  href="/#contact"
                  className="nav-link"
                  data-section-name="CONTACT"
                  onMouseEnter={handleContactMouseEnter}
                  onMouseLeave={handleContactMouseLeave}
                >
                  {contactText}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderProjects;