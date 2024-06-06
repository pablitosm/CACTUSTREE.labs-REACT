import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Art() {
  const introImageUrls = Array.from({ length: 8 }, (_, index) => `/img_webp/intro/${index + 1}.webp`);
  const zeroImageUrls = Array.from({ length: 8 }, (_, index) => `/img_webp/zero/${index + 1}.webp`);

  const images = [...introImageUrls, ...zeroImageUrls].map((url) => ({
    src: url,
    style: {
      backgroundImage: `url(${url})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));

  const stillsSectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (stillsSectionRef.current && containerRef.current) {
        const textHeight = stillsSectionRef.current.clientHeight;
        containerRef.current.style.height = `${textHeight}px`;
      }
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <>
      <div className="art quintaImagen" id="art">
        <img className="stills-section-image" src="/img/stills-text.png" alt="" />
        <hr />
        <Link to="/stills">
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner position-relative">
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-text stills">STILLS CAROUSEL</div>
              <div className="carousel-text view-more">VIEW MORE &#8677;</div>
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={image.style}></div>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <Link to="/photo">
        <div className="container-scroll-index">
          <div className="scrolling-text-index">
            <p>| CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY | CLICK TO VIEW THE GALLERY</p>
          </div>
        </div>
        <div className="cuartaImagen" id='gallery'>
          <img className="img-artgallery" src="/img/artgallery-text.png" alt="" />
        </div>
        <div className="container-carousel-bottom">
          <img src="/img/stills_zero_webp/1.webp" alt="ola" />
        </div>
      </Link>
    </>
  );
}

export default Art;