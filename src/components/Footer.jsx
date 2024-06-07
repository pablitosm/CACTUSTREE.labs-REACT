import React, { useState, useEffect } from 'react';

function Footer() {

  const [projectsText, setProjectsText] = useState('PROJECTS');
  const [stillsText, setStillsText] = useState('STILLS');
  const [instagramText, setInstagramText] = useState('INSTAGRAM');
  const [youtubeText, setYoutubeText] = useState('YOUTUBE');
  const [galleryText, setGalleryText] = useState('GALLERY');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
    }
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

  const handleStillsMouseEnter = () => {
    const random = Math.random();
    if (random < 0.33) {
      setStillsText('ST1LLS');
    } else if (random < 0.66) {
      setStillsText('5T1LLS');
    } else {
      setStillsText('STILLS');
    }
  };

  const handleStillsMouseLeave = () => {
    setStillsText('STILLS');
  };

  const handleInstagramMouseEnter = () => {
    const random = Math.random();
    if (random < 0.5) {
      setInstagramText('1NSTAGRAM');
    } else {
      setInstagramText('INST@GRAM');
    }
  };

  const handleInstagramMouseLeave = () => {
    setInstagramText('INSTAGRAM');
  };

  const handleYoutubeMouseEnter = () => {
    const random = Math.random();
    if (random < 0.5) {
      setYoutubeText('Y0UTUBE');
    } else {
      setYoutubeText('Y*UTU3E');
    }
  };

  const handleYoutubeMouseLeave = () => {
    setYoutubeText('YOUTUBE');
  };

  const handleGalleryMouseEnter = () => {
    setGalleryText('GALLE3Y');
  };

  const handleGalleryMouseLeave = () => {
    setGalleryText('GALLERY');
  };

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <footer className="footerIndex">
      <table className="table-footer-index">
        <tbody>

          <tr>
            <td>
              <a
                className="link-footer-index"
                href="#projects"
                onMouseEnter={handleProjectsMouseEnter}
                onMouseLeave={handleProjectsMouseLeave}
              >
                {projectsText}
              </a>
            </td>
            <td className="rightAlign-footer-index">
              <a
                className="link-footer-index"
                href="https://www.instagram.com/cactustree.labs/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleInstagramMouseEnter}
                onMouseLeave={handleInstagramMouseLeave}
              >
                <span>{instagramText}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                className="link-footer-index"
                href="#art"
                onMouseEnter={handleStillsMouseEnter}
                onMouseLeave={handleStillsMouseLeave}
              >
                {stillsText}
              </a>
            </td>
            <td className="rightAlign-footer-index">
              <a
                className="link-footer-index"
                href="https://www.youtube.com/@whoiskolo"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleYoutubeMouseEnter}
                onMouseLeave={handleYoutubeMouseLeave}
              >
                <span>{youtubeText}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                className="link-footer-index"
                href="#art"
                onMouseEnter={handleGalleryMouseEnter}
                onMouseLeave={handleGalleryMouseLeave}
              >
                {galleryText}
              </a>
            </td>
            <td
              className="rightAlign-footer-index"
              onClick={handleDarkModeClick}
            >
              DARK MODE: {darkMode ? 'ON' : 'OFF'}
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}

export default Footer;