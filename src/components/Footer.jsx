import React from 'react';

function Footer() {
  return (
    <footer className="footerIndex">
      <table className="table-footer-index">
        <thead>
          <tr>
            <th><p>CACTUSTREE.labs&#8482;</p></th>
            <th style={{ textAlign: 'right' }}>
              {/* Aquí podrías agregar una imagen o enlace si es necesario */}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" style={{ height: '25px' }}></td>
          </tr>
          <tr>
            <td className="white-footer-index" style={{ fontWeight: 'bold' }}>USEFUL LINKS</td>
            <td className="rightAlign-footer-index" style={{ fontWeight: 'bold' }}>CONTACT</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ height: '15px' }}></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#projects">PROJECTS</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.instagram.com/cactustree.labs/" target="_blank" rel="noreferrer"><span style={{ marginRight: '10px' }}>INSTAGRAM</span></a><img className="imageFooter" src="./img/about/foto_copy.png" alt="" /></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#art">ART</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.threads.net/@cactustree.labs" target="_blank" rel="noreferrer"><span style={{ marginRight: '10px' }}>THREADS</span></a><img className="imageFooter" src="./img/threads-logo.png" alt="" /></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="#contact">CONTACT</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://vimeo.com/user201951037" target="_blank" rel="noreferrer"><span style={{ marginRight: '10px' }}>VIMEO</span></a><img className="imageFooter" src="./img/vimeo-logo.png" alt="" /></td>
          </tr>
          <tr>
            <td><a className="link-footer-index" href="./html/photo.html">PHOTOGRAPHY</a></td>
            <td className="rightAlign-footer-index"><a className="link-footer-index" href="https://www.youtube.com/@whoiskolo" target="_blank" rel="noreferrer"><span style={{ marginRight: '10px' }}>YOUTUBE</span></a><img className="imageFooter" src="./img/youtube-logo.png" alt="" /></td>
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
