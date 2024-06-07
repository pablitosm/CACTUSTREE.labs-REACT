import React, { useEffect, useState } from 'react';
import HeaderProjects from './HeaderProjects';

function Header() {
  const [showHeaderProjects, setShowHeaderProjects] = useState(false);

  const [projectsText, setProjectsText] = useState('PROJECTS');
  const [artGalleryText, setArtGalleryText] = useState('ART.GALLERY');
  const [contactText, setContactText] = useState('CONTACT');

  useEffect(() => {
    const adjustMargin = () => {
      const containerNavegacion = document.querySelector('.container-navegacion');
      const imageElement = document.querySelector('.gif-cactustreelabs');
      if (containerNavegacion && imageElement) {
        const imageRect = imageElement.getBoundingClientRect();
        containerNavegacion.style.marginTop = `${imageRect.top - 35}px`;
      }
    };

    const handleLoadAndResize = () => {
      adjustMargin();
      window.addEventListener('resize', adjustMargin);
    };

    window.addEventListener('load', handleLoadAndResize);

    const intervalId = setInterval(() => {
      const imageElement = document.querySelector('.gif-cactustreelabs');
      if (imageElement) {
        adjustMargin();
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoadAndResize);
      window.removeEventListener('resize', adjustMargin);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const projectsSection = document.querySelector('.container-navbar-view');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowHeaderProjects(true);
          } else {
            setShowHeaderProjects(false);
          }
        });
      },
      { rootMargin: '0px 0px -100% 0px' }
    );

    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

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
    <>
      <nav className="navbar-index">
        <div className="container-navegacion">
          <div className="navbar-top">
            <ul>
              <div className="navbar-left">
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
              <div className="navbar-right">
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
      {showHeaderProjects && <HeaderProjects />}
    </>
  );
}

export default Header;