import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const adjustMargin = () => {
      const containerNavegacion = document.querySelector('.container-navegacion');
      const imageElement = document.querySelector('.gif-cactustreelabs'); // Asume que la imagen tiene esta clase
      if (containerNavegacion && imageElement) {
        const imageRect = imageElement.getBoundingClientRect();
        containerNavegacion.style.marginTop = `${imageRect.top - 25}px`;
      }
    };

    const handleLoad = () => {
      window.addEventListener('resize', adjustMargin);
      adjustMargin();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', adjustMargin);
    };
  }, []);

  return (
    <nav className="navbar-index">
      <div className="container-navegacion">
        <div className="navbar-top">
          <ul>
            <div className="navbar-left">
              <li>
                <a href="#projects" className="nav-link projects-navbar" data-section-name="PROJECTS">PROJECTS</a>
              </li>
              <li>
                <a href="#art" className="nav-link" data-section-name="ART GALLERY">ART.GALLERY</a>
              </li>
            </div>
            <div className="navbar-right">
              <li>
                <a href="#contact" className="nav-link" data-section-name="CONTACT">CONTACT</a>
              </li>
            </div>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Header;