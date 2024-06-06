import React, { useEffect, useState, useCallback, useMemo } from 'react';
import ColorThief from 'colorthief';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import HeaderProjects from '../components/HeaderProjects';

const imagePaths = [
    '/img/stills_zero_webp/1.webp', '/img/stills_zero_webp/2.webp', '/img/stills_zero_webp/3.webp', '/img/stills_zero_webp/4.webp',
    '/img/stills_zero_webp/5.webp', '/img/stills_zero_webp/7.webp', '/img/stills_zero_webp/8.webp',
    '/img/stills_zero_webp/9.webp', '/img/stills_zero_webp/10.webp', '/img/stills_zero_webp/11.webp', '/img/stills_zero_webp/12.webp',
    '/img/stills_zero_webp/13.webp', '/img/stills_zero_webp/14.webp', '/img/stills_zero_webp/15.webp', '/img/stills_zero_webp/16.webp',
    '/img/stills_zero_webp/17.webp', '/img/stills_zero_webp/18.webp', '/img/stills_zero_webp/19.webp', '/img/stills_zero_webp/20.webp',
    '/img/stills_zero_webp/21.webp', '/img/stills_zero_webp/22.webp', '/img/stills_zero_webp/23.webp', '/img/stills_zero_webp/24.webp',
    '/img/stills_zero_webp/25.webp', '/img/stills_zero_webp/26.webp', '/img/stills_zero_webp/27.webp', '/img/stills_zero_webp/28.webp',
    '/img/stills_zero_webp/29.webp', '/img/stills_zero_webp/30.webp', '/img/stills_zero_webp/31.webp', '/img/stills_zero_webp/32.webp',
    '/img/stills_zero_webp/33.webp', '/img/stills_zero_webp/34.webp', '/img/stills_zero_webp/35.webp', '/img/stills_zero_webp/36.webp',
    '/img/stills_zero_webp/37.webp', '/img/stills_zero_webp/38.webp', '/img/stills_zero_webp/39.webp', '/img/stills_zero_webp/40.webp',
    '/img/stills_zero_webp/41.webp', '/img/stills_zero_webp/42.webp', '/img/stills_zero_webp/43.webp', '/img/stills_zero_webp/44.webp',
    '/img/stills_zero_webp/45.webp', '/img/stills_zero_webp/46.webp', '/img/stills_zero_webp/47.webp', '/img/stills_zero_webp/48.webp',
    '/img/stills_zero_webp/49.webp', '/img/stills_zero_webp/50.webp', '/img/stills_zero_webp/51.webp', '/img/stills_zero_webp/56.webp',
    '/img/stills_zero_webp/53.webp', '/img/stills_zero_webp/54.webp', '/img/stills_zero_webp/55.webp',
    '/img/stills_zero_webp/57.webp', '/img/stills_zero_webp/58.webp', '/img/stills_zero_webp/59.webp', '/img/stills_zero_webp/60.webp',
    '/img_webp/zero/1.webp', '/img_webp/zero/2.webp', '/img_webp/zero/3.webp', '/img_webp/zero/4.webp', '/img/stills_zero_webp/6.webp',
    '/img_webp/zero/5.webp', '/img_webp/zero/6.webp', '/img_webp/zero/7.webp', '/img_webp/zero/8.webp', '/img/stills_zero_webp/rojo.webp',
    '/img_webp/intro/1.webp', '/img_webp/intro/2.webp', '/img_webp/intro/3.webp', '/img_webp/intro/4.webp',
    '/img_webp/intro/5.webp', '/img_webp/intro/6.webp', '/img_webp/intro/7.webp', '/img_webp/intro/8.webp',
    '/img/stills_preview/25.jpg', '/img/stills_preview/9.jpg', '/img/stills_preview/1.jpg', '/img/stills_preview/2.jpg',
    '/img/stills_preview/3.jpg', '/img/stills_preview/4.jpg', '/img/stills_preview/5.jpg', '/img/stills_preview/6.jpg',
    '/img/stills_preview/7.jpg', '/img/stills_preview/8.jpg', '/img/stills_preview/10.jpg', '/img/stills_preview/11.jpg',
    '/img/stills_preview/12.jpg', '/img/stills_preview/13.jpg', '/img/stills_preview/14.jpg', '/img/stills_preview/15.jpg',
    '/img/stills_preview/16.jpg', '/img/stills_preview/17.jpg', '/img/stills_preview/18.jpg', '/img/stills_preview/19.jpg',
    '/img/stills_preview/20.jpg', '/img/stills_preview/21.jpg', '/img/stills_preview/22.jpg', '/img/stills_preview/24.jpg'
];


function Stills() {
    const [images, setImages] = useState([]);
    const [colorData, setColorData] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        const loadImages = async () => {
            const promises = imagePaths.map((path) =>
                fetch(path)
                    .then((res) => res.blob())
                    .then((blob) => URL.createObjectURL(blob))
            );
            const imgs = await Promise.all(promises);
            setImages(imgs);
            analyzeColors(imgs);
        };

        const analyzeColors = (imgs) => {
            const colorThief = new ColorThief();
            const imageColors = imgs.map((img) => {
                const imgElement = new Image();
                imgElement.src = img;
                imgElement.crossOrigin = 'Anonymous';
                return new Promise((resolve, reject) => {
                    imgElement.onload = () => {
                        try {
                            const color = colorThief.getColor(imgElement);
                            resolve({ img, color });
                        } catch (error) {
                            console.error(`Failed to analyze color for image ${img}`, error);
                            reject(error);
                        }
                    };
                    imgElement.onerror = () => {
                        console.error(`Failed to load image ${img}`);
                        reject(new Error(`Failed to load image ${img}`));
                    };
                });
            });

            Promise.allSettled(imageColors).then((results) => {
                const colors = results
                    .filter((result) => result.status === 'fulfilled')
                    .map((result) => result.value);
                setColorData(colors);
                if (colors.length > 0) {
                    setSelectedColor(colors[0].color);
                }
            });
        };

        loadImages();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleColorClick = useCallback((color) => {
        setSelectedColor(color);
    }, []);

    const getColorDistance = useCallback((color1, color2) => {
        return Math.sqrt(
            (color1[0] - color2[0]) ** 2 +
            (color1[1] - color2[1]) ** 2 +
            (color1[2] - color2[2]) ** 2
        );
    }, []);

    const maxDistance = useMemo(() => Math.sqrt(255 ** 2 + 255 ** 2 + 255 ** 2), []);

    const sortedImages = useMemo(() => {
        const baseSize = Math.max(50, windowWidth / 10);
        return colorData
            .slice()
            .sort((a, b) => getColorDistance(a.color, selectedColor) - getColorDistance(b.color, selectedColor))
            .map((item) => {
                const distance = getColorDistance(item.color, selectedColor);
                const similarity = 1 - (distance / maxDistance);
                const size = selectedColor ? Math.max(baseSize, baseSize + 950 * Math.pow(similarity, 5)) : 150; // Ajuste de sensibilidad
                return { img: item.img, size };
            });
    }, [colorData, selectedColor, getColorDistance, maxDistance, windowWidth]);

    const topColors = useMemo(() => Array.from(new Set(colorData.map((item) => item.color))).slice(0, 69), [colorData]);

    return (
        <>
            <div className="stills-container-top">
                <HeaderProjects />
                <div className="container-header-stills">

                    <div className="text-container-stills-text-left">
                        <img src="/img/stills-text.png" alt="" />
                    </div>

                    <div className="text-container-stills-text-right">
                        <p className="pieFoto">EACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENT, PROVIDING YOU WITH AN EXCLUSIVE GLIMPSE BEHIND THE SCENES. IT OFFERS A PREVIEW OF MY WORK, SHOWCASING THE DEDICATION AND CRAFTSMANSHIP THAT I POUR INTO EVERY PROJECT.
                        </p>
                    </div>
                </div>
                <div className="color-picker" style={{ width: '100%' }}>
                    {topColors.map((color, index) => (
                        <div
                            key={index}
                            className="color-box"
                            style={{
                                backgroundColor: `rgb(${color.join(',')})`,
                                width: `${100 / topColors.length}%`,
                                height: '40px'
                            }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>
                <div className="scrolling-text">
                    <p>| CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR | CLICK TO SORT BY COLOUR</p>
                </div>
            </div>
            <div className="stills-container">
                <div className="image-collage">
                    {sortedImages.map((item, index) => (
                        <img
                            key={index}
                            src={item.img}
                            alt={`still ${index + 1}`}
                            className="still-image"
                            loading="lazy"
                            style={{
                                width: item.size + 'px',
                                height: 'auto',
                                margin: '7.5px'
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Stills;