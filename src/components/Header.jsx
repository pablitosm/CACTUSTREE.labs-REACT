import React from 'react';

function Header() {
  return (
      <nav className="navbar-index">
        <ul>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#art">ART.GALLERY</a></li>
          <li className="margin-menu-left"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
  );
}

export default Header;
