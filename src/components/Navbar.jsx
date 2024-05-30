import React from 'react';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li>
            <a href="#projects" data-section-name="PROJECTS"></a>
            <div className="section-name">projects</div>
          </li>
          <li>
            <a href="#art" data-section-name="ART"></a>
            <div className="section-name">art</div>
          </li>
          <li>
            <a href="#contact" data-section-name="CONTACT"></a>
            <div className="section-name">contact</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
