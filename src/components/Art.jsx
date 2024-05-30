import React from 'react';
import PrimeraImagen from '/img_webp/intro/1.webp';
import SegundaImagen from '/img_webp/intro/2.webp';
import TerceraImagen from '/img_webp/intro/3.webp';
import CuartaImagen from '/img_webp/intro/4.webp';
import QuintaImagen from '/img_webp/intro/5.webp';
import SextaImagen from '/img_webp/intro/6.webp';
import SeptimaImagen from '/img_webp/intro/7.webp';
import OctavaImagen from '/img_webp/intro/8.webp';
import NovenaImagen from '/img_webp/zero/1.webp';
import DecimaImagen from '/img_webp/zero/2.webp';
import UndecimaImagen from '/img_webp/zero/3.webp';
import DuodecimaImagen from '/img_webp/zero/4.webp';
import DecimoterceraImagen from '/img_webp/zero/5.webp';
import DecimocuartaImagen from '/img_webp/zero/6.webp';
import DecimoquintaImagen from '/img_webp/zero/7.webp';
import DecimosextaImagen from '/img_webp/zero/8.webp';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Art() {
  const images = [
    { src: PrimeraImagen, style: { backgroundImage: `url(${PrimeraImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: SegundaImagen, style: { backgroundImage: `url(${SegundaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: TerceraImagen, style: { backgroundImage: `url(${TerceraImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: CuartaImagen, style: { backgroundImage: `url(${CuartaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: QuintaImagen, style: { backgroundImage: `url(${QuintaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: SextaImagen, style: { backgroundImage: `url(${SextaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: SeptimaImagen, style: { backgroundImage: `url(${SeptimaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: OctavaImagen, style: { backgroundImage: `url(${OctavaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: NovenaImagen, style: { backgroundImage: `url(${NovenaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DecimaImagen, style: { backgroundImage: `url(${DecimaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: UndecimaImagen, style: { backgroundImage: `url(${UndecimaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DuodecimaImagen, style: { backgroundImage: `url(${DuodecimaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DecimoterceraImagen, style: { backgroundImage: `url(${DecimoterceraImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DecimocuartaImagen, style: { backgroundImage: `url(${DecimocuartaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DecimoquintaImagen, style: { backgroundImage: `url(${DecimoquintaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
    { src: DecimosextaImagen, style: { backgroundImage: `url(${DecimosextaImagen})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } },
  ];

  return (
    <div className="art quintaImagen" id="art">

    
      <div className="new-photo-link-container">
        <Link className="photo-link-new" to="/photo">
          <img className="photo-img-new" src="/img/stills_preview/13.jpg" alt="Art Gallery" />
          <div className="text-container-new">
            <h2 className="titulo2TextoPhotoIndex">art.gallery</h2>
          </div>
        </Link>
      </div>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={image.style}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Art;