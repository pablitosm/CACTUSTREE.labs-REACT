import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const adjustMargin = () => {
      const containerNavegacion = document.querySelector('.container-navegacion');
      const imageElement = document.querySelector('.gif-cactustreelabs'); // Asume que la imagen tiene esta clase
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

    // Usar setInterval para verificar la visibilidad de la imagen periódicamente
    const intervalId = setInterval(() => {
      const imageElement = document.querySelector('.gif-cactustreelabs');
      if (imageElement) {
        adjustMargin();
        clearInterval(intervalId);
      }
    }, 500); // Verificar cada 500ms

    return () => {
      window.removeEventListener('load', handleLoadAndResize);
      window.removeEventListener('resize', adjustMargin);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <nav className="navbar-index">
      <div className="container-navegacion">
        <div className="navbar-top">
          <ul>
            <div className="navbar-left">
              <li>
                <a href="/#projects" className="nav-link projects-navbar" data-section-name="PROJECTS">PROJECTS</a>
              </li>
              <li>
                <a href="/#art" className="nav-link" data-section-name="ART GALLERY">ART.GALLERY</a>
              </li>
            </div>
            <div className="navbar-right">
              <li>
                <a href="/#contact" className="nav-link" data-section-name="CONTACT">CONTACT</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;