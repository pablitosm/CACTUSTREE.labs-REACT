import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Art() {
  const introImageUrls = Array.from({ length: 8 }, (_, index) => `/img_webp/intro/${index + 1}.webp`);
  const zeroImageUrls = Array.from({ length: 8 }, (_, index) => `/img_webp/zero/${index + 1}.webp`);
  const [imageSrc, setImageSrc] = useState('/img/artgallery-text.png');
  const [imageSrc1, setImageSrc1] = useState('/img/stills-text.png');

  useEffect(() => {
    const handleClassChange = () => {
      if (document.body.classList.contains('dark')) {
        setImageSrc('/img/artgallery-text-white.png');
        setImageSrc1('/img/stills-text-white.png');
      } else {
        setImageSrc('/img/artgallery-text.png');
        setImageSrc1('/img/stills-text.png');
      }
    };

    // Initialize the correct image based on the initial class of the body
    handleClassChange();

    // Create a mutation observer to watch for changes to the class attribute on the body
    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  const images = [...introImageUrls, ...zeroImageUrls].map((url) => ({
    src: url,
    style: {
      backgroundImage: `url(${url})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));

  const stillsZeroImages = Array.from({ length: 60 }, (_, index) => `/img/stills_zero_webp/${index + 1}.webp`);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1280, min: 760 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 760, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
        <img className="stills-section-image" src={imageSrc1} alt="" />
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
              <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
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
          <img className="img-artgallery" src={imageSrc} alt="" />
        </div>
      </Link>
      <div className="container-carousel-bottom">
        <Carousel
        className='carousel-container'
          responsive={responsive}
          showDots={false}
          infinite={true}
          arrows={true}
          autoSlide={2000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {stillsZeroImages.map((src, index) => (
            <div key={index} style={{ padding: '7.5px', position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <img src={src} alt={`Stills Zero ${index + 1}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

const CustomLeftArrow = ({ onClick }) => (
  <button className="custom-arrow custom-left-arrow" onClick={onClick}>
    &#10094;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="custom-arrow custom-right-arrow" onClick={onClick}>
    &#10095;
  </button>
);

export default Art;