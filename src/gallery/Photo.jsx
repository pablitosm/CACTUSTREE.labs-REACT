import React, { useEffect, useState } from 'react';
import ColorThief from 'colorthief';
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

    const [zeroPalettes, setZeroPalettes] = useState([]);
    const [skiPalettes, setSkiPalettes] = useState([]);
    const [introPalettes, setIntroPalettes] = useState([]);
    const [artGalleryPalettes, setArtGalleryPalettes] = useState([]);

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

    useEffect(() => {
        const loadPalettes = async (images, setPalettes) => {
            const colorThief = new ColorThief();
            const palettes = await Promise.all(images.map(src => new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.crossOrigin = 'Anonymous';
                img.onload = () => resolve(colorThief.getPalette(img, 5));
            })));
            setPalettes(palettes);
        };

        loadPalettes(zeroImages, setZeroPalettes);
        loadPalettes(skiImages, setSkiPalettes);
        loadPalettes(introImages, setIntroPalettes);
        loadPalettes(artGalleryImages, setArtGalleryPalettes);
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

    const rgbToHex = (rgb) => {
        const hex = rgb.map(value => {
            const hexValue = value.toString(16);
            return hexValue.length === 1 ? '0' + hexValue : hexValue;
        }).join('');
        return `#${hex}`;
    };

    const renderPalette = (palette) => (
        <div className="palette">
            <div className="color-box-main" style={{ backgroundColor: `rgb(${palette[0].join(',')})` }}></div>
            {palette.slice(1).map((color, index) => (
                <div key={index} className="color-box-gallery" style={{ backgroundColor: `rgb(${color.join(',')})` }}></div>
            ))}
            <span className="color-hex">{rgbToHex(palette[0])}</span>
        </div>
    );

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
                            THIS IS A COMPILATION OF ALL MY PHOTOS ORDERED BY ZERO, INTRO AND SKI AND DIFFERENT PHOTOS THAT I TAKE, EACH ONE TELLS A DIFFERENT HISTORY.
                        </p>
                    </div>
                </div>
                <div className="image-container-photo-top">
                    <img src="/img_webp/intro/1.webp" alt="" />
                </div>
            </div>
            <div className="gallery-container-bottom">
                <div className="container-header-intro">
                    <div className="text-container-zero-text-left-photo">
                        <img src={zeroImageSrc} alt="" />
                    </div>
                    <div className="text-container-intro-text-right">
                        <p className="pieFoto">(ZERØ tells the story of a boy exhausted by the monotony
                            of life, feeling that nothing has any meaning anymore. In a desperate act,
                            he decides to dive into a bathtub, uncertain whether he will emerge or simply
                            get lost in the depths of his own existence).
                        </p>
                        <p className="textoGrande">ZERØ is a personal project that I was able to carry out
                            thanks to a crowdfunding and the collaboration of friends and colleagues.
                        </p>
                    </div>
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
                        <div key={index} className="grid-item" onMouseEnter={() => goToZeroSlide(index)}>
                            <img src={image} alt={`Zero image ${index + 1}`} />
                            {zeroPalettes[index] && (
                                <div className="palette-container">
                                    {renderPalette(zeroPalettes[index])}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="container-header-intro">

                    <div className="text-container-ski-text-left-photo">
                        <img src={skiImageSrc} alt="" />
                    </div>
                    <div className="text-container-intro-text-right">
                        <p className="pieFoto">(Discover the daily life in one of the most remote resorts in the world,
                            where the snow is the protagonist and the only concern is the next day's adventure).
                        </p>
                        <p className="textoGrande">TEBAY let us record these images to make a short video about what
                            it is like to stay in a ski resort in the middle of one of the largest national parks in the world.
                        </p>
                    </div>

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
                        <div key={index} className="grid-item" onMouseEnter={() => goToSkiSlide(index)}>
                            <img src={image} alt={`Ski image ${index + 1}`} />
                            {skiPalettes[index] && (
                                <div className="palette-container">
                                    {renderPalette(skiPalettes[index])}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="container-header-intro">
                    <div className="text-container-intro-text-left-photo">
                        <img src={introImageSrc} alt="" />
                    </div>

                    <div className="text-container-intro-text-right">
                        <p className="pieFoto">
                            (INTRO is the story of a teenage girl who is going through a bad period in her life, she has just had a breakup and it is not being easy for her to get over it. In the video you can see how she tries to be well and enjoy her life going out partying, but in her head she cant stop thinking about the last conversation they had and how it ended).
                        </p>
                        <p className="textoGrande">intro is the making of a video clip about the problems facing teenagers in the 21st century.</p>
                    </div>
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
                                <img src={image} alt={`Intro image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-grid">
                    {introImages.map((image, index) => (
                        <div key={index} className="grid-item" onMouseEnter={() => goToIntroSlide(index)}>
                            <img src={image} alt={`Intro image ${index + 1}`} />
                            {introPalettes[index] && (
                                <div className="palette-container">
                                    {renderPalette(introPalettes[index])}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="container-header-intro">
                    <div className="text-container-photos-text-left-photo">
                        <img src={photosImageSrc} alt="" />
                    </div>

                    <div className="text-container-intro-text-right">
                        <p className="pieFoto">
                            (INTRO is the story of a teenage girl who is going through a bad period in her life, she has just had a breakup and it is not being easy for her to get over it. In the video you can see how she tries to be well and enjoy her life going out partying, but in her head she cant stop thinking about the last conversation they had and how it ended).
                        </p>
                        <p className="textoGrande">intro is the making of a video clip about the problems facing teenagers in the 21st century.</p>
                    </div>
                </div>
                <div id="photosCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {artGalleryImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#photosCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner position-relative">
                        <button className="carousel-control-prev custom-control-prev" type="button" data-bs-target="#photosCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next custom-control-next" type="button" data-bs-target="#photosCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        {artGalleryImages.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image} alt={`Photos image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-grid">
                    {artGalleryImages.map((image, index) => (
                        <div key={index} className="grid-item" onMouseEnter={() => goToPhotosSlide(index)}>
                            <img src={image} alt={`Photos image ${index + 1}`} />
                            {artGalleryPalettes[index] && (
                                <div className="palette-container">
                                    {renderPalette(artGalleryPalettes[index])}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Photo;
