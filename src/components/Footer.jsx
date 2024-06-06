import React, { useState } from 'react';

function Footer() {

  const [projectsText, setProjectsText] = useState('PROJECTS');
  const [stillsText, setStillsText] = useState('STILLS');
  const [instagramText, setInstagramText] = useState('INSTAGRAM');
  const [youtubeText, setYoutubeText] = useState('YOUTUBE');

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
        </tbody>
      </table>
    </footer>
  );
}

export default Footer;