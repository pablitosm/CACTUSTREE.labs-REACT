import React from 'react';

function Footer() {
  return (
    <footer className="footerIndex">
      <table className="table-footer-index">
        <tbody>
          <tr>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="white-footer-index">CACTUSTREE.labs&#8482;</td>
            <td className="rightAlign-footer-index">CONTACT</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ height: '15px' }}></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#projects">PROJECTS</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.instagram.com/cactustree.labs/" target="_blank" rel="noreferrer"><span>INSTAGRAM</span></a></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#art">ART</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.threads.net/@cactustree.labs" target="_blank" rel="noreferrer"><span>THREADS</span></a></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#contact">CONTACT</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://vimeo.com/user201951037" target="_blank" rel="noreferrer"><span>VIMEO</span></a></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="./html/photo.html">PHOTOGRAPHY</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.youtube.com/@whoiskolo" target="_blank" rel="noreferrer"><span>YOUTUBE</span></a></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ height: '15px' }}></td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}

export default Footer;
