import React from 'react';
import { Link } from 'react-router-dom';

const Zero = () => {
  return (
    <div className="bodyProyecto1">
      <div id="contenido5">
        <header style={{ position: 'absolute', top: 0, left: 0 }}>
          <nav>
            <Link to="/">
              <img className="logo" src="/img/principal/logo.png" alt="logo" />
            </Link>
            <ul className="navBarProyectos">
              <li><Link to="/#projects">PROJECTS</Link></li>
              <li><Link to="/#art">ART</Link></li>
              <li><Link to="/#contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="ceroImagen"></div>

      <div className="textContainerProyecto1">
        <h2 className="titulo2Texto">ZERO</h2>

        <div className="foto2 image1Proyecto1">
          <img src="/img_webp/zero/1.webp" alt="zero-1" />
        </div>
        
        <div className="foto2 image2Proyecto1">
          <img src="/img_webp/zero/2.webp" alt="zero-2" />
        </div>

        <table className="tableProyecto1">
          <tbody>
            <tr>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/3.webp" alt="zero-3" />
                </div>
              </td>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/4.webp" alt="zero-4" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/5.webp" alt="zero-5" />
                </div>
              </td>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/6.webp" alt="zero-6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/7.webp" alt="zero-7" />
                </div>
              </td>
              <td>
                <div className="foto3">
                  <img src="/img_webp/zero/8.webp" alt="zero-8" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>

      <footer>
        <p>CACTUSTREE.labs™</p>
        <a href="https://www.instagram.com/cactustree.labs/" target="_blank" rel="noopener noreferrer">
          <img className="imageFooter" src="/img/about/foto_copy.png" alt="Instagram" />
        </a>
      </footer>
    </div>
  );
}

export default Zero;
