import React from 'react';

function HeaderProjects() {

  return (
    <nav className="navbar-index" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 10000 }}>
      <div className="container-navegacion">
        <div className="navbar-top">
          <ul>
            <div className="navbar-left-intro">
              <li>
                <a href="/#projects" className="nav-link projects-navbar" data-section-name="PROJECTS">PROJECTS</a>
              </li>
              <li>
                <a href="/#art" className="nav-link" data-section-name="ART GALLERY">ART.GALLERY</a>
              </li>
            </div>
            <div className="navbar-right-intro">
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

export default HeaderProjects;