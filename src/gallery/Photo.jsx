import React, { useEffect, useState } from 'react';
import HeaderProjects from '../components/HeaderProjects';

const zeroImages = [
    '/img_webp/zero/1.webp',
    '/img_webp/zero/2.webp',
    '/img_webp/zero/3.webp',
    '/img_webp/zero/4.webp',
    '/img_webp/zero/5.webp',
    '/img_webp/zero/6.webp',
    '/img_webp/zero/7.webp',
    '/img_webp/zero/8.webp'
];

const skiImages = [
    '/img_webp/ski/ski1.webp',
    '/img_webp/ski/ski2.webp',
    '/img_webp/ski/ski3.webp',
    '/img_webp/ski/ski4.webp',
    '/img_webp/ski/ski5.webp',
    '/img_webp/ski/ski6.webp',
    '/img_webp/ski/ski7.webp',
    '/img_webp/ski/ski8.webp'
];

const introImages = [
    '/img_webp/intro/1.webp',
    '/img_webp/intro/2.webp',
    '/img_webp/intro/3.webp',
    '/img_webp/intro/4.webp',
    '/img_webp/intro/5.webp',
    '/img_webp/intro/6.webp',
    '/img_webp/intro/7.webp',
    '/img_webp/intro/8.webp'
];

const artGalleryImages = [
    '/img/artgallery_webp/1.webp',
    '/img/artgallery_webp/2.webp',
    '/img/artgallery_webp/3.webp',
    '/img/artgallery_webp/4.webp',
    '/img/artgallery_webp/5.webp',
    '/img/artgallery_webp/6.webp',
    '/img/artgallery_webp/7.webp',
    '/img/artgallery_webp/8.webp',
    '/img/artgallery_webp/9.webp',
    '/img/artgallery_webp/10.webp',
    '/img/artgallery_webp/11.webp',
    '/img/artgallery_webp/12.webp',
    '/img/artgallery_webp/13.webp',
    '/img/artgallery_webp/14.webp',
    '/img/artgallery_webp/15.webp',
    '/img/artgallery_webp/16.webp'
];


function Photo() {
    const [headerImageSrc, setHeaderImageSrc] = useState('/img/artgallery-text.png');
    const [zeroImageSrc, setHeaderImageSrc1] = useState('/img/zero-text.png');
    const [introImageSrc, setHeaderImageSrc2] = useState('/img/intro-text.png');
    const [skiImageSrc, setHeaderImageSrc3] = useState('/img/tebay-text.png');
    const [photosImageSrc, setHeaderImageSrc4] = useState('/img/photos-text.png');

    const [zeroActiveIndex, setZeroActiveIndex] = useState(0);
    const [introActiveIndex, setIntroActiveIndex] = useState(0);
    const [skiActiveIndex, setSkiActiveIndex] = useState(0);
    const [photosActiveIndex, setPhotosActiveIndex] = useState(0);


    useEffect(() => {
        window.scrollTo(0, 0);

        const handleClassChange = () => {
            if (document.body.classList.contains('dark')) {
                setHeaderImageSrc('/img/artgallery-text-white.png');
                setHeaderImageSrc1('/img/zero-text-white.png');
                setHeaderImageSrc2('/img/intro-text-white.png');
                setHeaderImageSrc3('/img/tebay-text-white.png');
                setHeaderImageSrc4('/img/photos-text-white.png');
            } else {
                setHeaderImageSrc('/img/artgallery-text.png');
                setHeaderImageSrc1('/img/zero-text.png');
                setHeaderImageSrc2('/img/intro-text.png');
                setHeaderImageSrc3('/img/tebay-text.png');
                setHeaderImageSrc4('/img/photos-text.png');
            }
        };

        handleClassChange();

        const observer = new MutationObserver(handleClassChange);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const goToZeroSlide = (index) => {
        setZeroActiveIndex(index);
        document.querySelector(`#zeroCarousel .carousel-item.active`).classList.remove('active');
        document.querySelectorAll(`#zeroCarousel .carousel-item`)[index].classList.add('active');
    };

    const goToIntroSlide = (index) => {
        setIntroActiveIndex(index);
        document.querySelector(`#introCarousel .carousel-item.active`).classList.remove('active');
        document.querySelectorAll(`#introCarousel .carousel-item`)[index].classList.add('active');
    };

    const goToSkiSlide = (index) => {
        setSkiActiveIndex(index);
        document.querySelector(`#skiCarousel .carousel-item.active`).classList.remove('active');
        document.querySelectorAll(`#skiCarousel .carousel-item`)[index].classList.add('active');
    };

    const goToPhotosSlide = (index) => {
        setPhotosActiveIndex(index);
        document.querySelector(`#photosCarousel .carousel-item.active`).classList.remove('active');
        document.querySelectorAll(`#photosCarousel .carousel-item`)[index].classList.add('active');
    };
    

    return (
        <>
            <HeaderProjects />
            <div className="gallery-container-top">
                <div className="container-header-gallery">
                    <div className="text-container-gallery-text-left">
                        <img className="image-artgallery-gallery" src={headerImageSrc} alt="" />
                    </div>
                    <div className="text-container-gallery-text-right">
                        <p className="pieFoto">
                            THIS IS A COMPILATION OF ALL MY PHOTOS ORDERED BY PROJECTS ZERO, INTRO AND SKI AND DIFFERENT PHOTOS THAT I TAKE, EACH ONE TELLS A DIFFERENT HISTORY.
                        </p>
                    </div>
                </div>
                <div className="image-container-photo-top">
                    <img src="/img_webp/intro/1.webp" alt="" />
                </div>
            </div>
            <div className="gallery-container-bottom">

                <div className="text-container-zero-text-left-photo">
                    <img src={zeroImageSrc} alt="" />
                </div>

                <div id="zeroCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {zeroImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#zeroCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner position-relative">
                        <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#zeroCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#zeroCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        {zeroImages.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image} alt={`Zero image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid">
                    {zeroImages.map((image, index) => (
                        <div key={index} className="grid-item" onClick={() => goToZeroSlide(index)}>
                            <img src={image} alt={`Zero image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="text-container-ski-text-left-photo">
                    <img src={skiImageSrc} alt="" />
                </div>

                <div id="skiCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {skiImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#skiCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner position-relative">
                        <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#skiCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#skiCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        {skiImages.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image} alt={`Ski image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid">
                {skiImages.map((image, index) => (
                        <div key={index} className="grid-item" onClick={() => goToSkiSlide(index)}>
                            <img src={image} alt={`Ski image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="text-container-intro-text-left-photo">
                    <img src={introImageSrc} alt="" />
                </div>

                <div id="introCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {introImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#introCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner position-relative">
                        <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#introCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#introCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        {introImages.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image} alt={`Art Gallery image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid">
                {introImages.map((image, index) => (
                        <div key={index} className="grid-item" onClick={() => goToIntroSlide(index)}>
                            <img src={image} alt={`Photos image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="text-container-photos-text-left-photo">
                    <img src={photosImageSrc} alt="" />
                </div>

                <div id="photosCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {artGalleryImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#artGalleryCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner position-relative">
                        <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#artGalleryCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#artGalleryCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        {artGalleryImages.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image} alt={`Art Gallery image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid">
                {artGalleryImages.map((image, index) => (
                        <div key={index} className="grid-item" onClick={() => goToPhotosSlide(index)}>
                            <img src={image} alt={`Photos image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Photo;
