import React, { useEffect, useState } from 'react';
import HeaderProjects from '../components/HeaderProjects';

const images = [
    '/img_webp/zero/1.webp', '/img_webp/zero/2.webp', '/img_webp/zero/3.webp', '/img_webp/zero/4.webp', '/img_webp/zero/5.webp', 
    '/img_webp/zero/6.webp', '/img_webp/zero/7.webp', '/img_webp/zero/8.webp',
    '/img_webp/intro/1.webp', '/img_webp/intro/2.webp', '/img_webp/intro/3.webp', '/img_webp/intro/4.webp', '/img_webp/intro/5.webp', 
    '/img_webp/intro/6.webp', '/img_webp/intro/7.webp', '/img_webp/intro/8.webp',
    '/img/stills_preview/25.jpg', '/img/stills_preview/9.jpg', '/img/stills_preview/1.jpg', '/img/stills_preview/2.jpg', 
    '/img/stills_preview/3.jpg', '/img/stills_preview/4.jpg', '/img/stills_preview/5.jpg', '/img/stills_preview/6.jpg',
    '/img/stills_preview/7.jpg', '/img/stills_preview/8.jpg', '/img/stills_preview/10.jpg', '/img/stills_preview/11.jpg', 
    '/img/stills_preview/12.jpg', '/img/stills_preview/13.jpg', '/img/stills_preview/14.jpg', '/img/stills_preview/15.jpg',
    '/img/stills_preview/16.jpg', '/img/stills_preview/17.jpg', '/img/stills_preview/18.jpg', '/img/stills_preview/19.jpg', 
    '/img/stills_preview/20.jpg', '/img/stills_preview/21.jpg', '/img/stills_preview/22.jpg', '/img/stills_preview/24.jpg'
];

function Photo() {
    const [headerImageSrc, setHeaderImageSrc] = useState('/img/artgallery-text.png');

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleClassChange = () => {
            if (document.body.classList.contains('dark')) {
                setHeaderImageSrc('/img/artgallery-text-white.png');
            } else {
                setHeaderImageSrc('/img/artgallery-text.png');
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
                            EACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENT, PROVIDING YOU WITH AN EXCLUSIVE GLIMPSE BEHIND THE SCENES. IT OFFERS A PREVIEW OF MY WORK, SHOWCASING THE DEDICATION AND CRAFTSMANSHIP THAT I POUR INTO EVERY PROJECT.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gallery-container-bottom">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <div className="container-gallery-image-top">
                            <img src={image} alt={`Gallery image ${index + 1}`} />
                        </div>
                        <div className="container-gallery-image-bottom">
                            <p>
                                HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Photo;