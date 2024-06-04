import React, { useEffect, useState } from 'react';
import ColorThief from 'colorthief';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeaderProjects from '../components/HeaderProjects';


const imagePaths = [
    '/img/stills_zero_webp/1.webp', '/img/stills_zero_webp/2.webp', '/img/stills_zero_webp/3.webp', '/img/stills_zero_webp/4.webp',
    '/img/stills_zero_webp/5.webp', '/img/stills_zero_webp/6.webp', '/img/stills_zero_webp/7.webp', '/img/stills_zero_webp/8.webp',
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
    '/img/stills_zero_webp/49.webp', '/img/stills_zero_webp/50.webp', '/img/stills_zero_webp/51.webp', '/img/stills_zero_webp/52.webp',
    '/img/stills_zero_webp/53.webp', '/img/stills_zero_webp/54.webp', '/img/stills_zero_webp/55.webp', '/img/stills_zero_webp/56.webp',
    '/img/stills_zero_webp/57.webp', '/img/stills_zero_webp/58.webp', '/img/stills_zero_webp/59.webp',
    '/img_webp/zero/1.webp', '/img_webp/zero/2.webp', '/img_webp/zero/3.webp', '/img_webp/zero/4.webp',
    '/img_webp/zero/5.webp', '/img_webp/zero/6.webp', '/img_webp/zero/7.webp', '/img_webp/zero/8.webp',
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

    useEffect(() => {
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
                return new Promise((resolve) => {
                    imgElement.onload = () => {
                        const color = colorThief.getColor(imgElement);
                        resolve({ img, color });
                    };
                });
            });

            Promise.all(imageColors).then((colors) => {
                setColorData(colors);
            });
        };

        loadImages();
    }, []);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const getColorDistance = (color1, color2) => {
        return Math.sqrt(
            (color1[0] - color2[0]) ** 2 +
            (color1[1] - color2[1]) ** 2 +
            (color1[2] - color2[2]) ** 2
        );
    };

    const sortedImages = selectedColor
        ? colorData
            .slice()
            .sort((a, b) => getColorDistance(a.color, selectedColor) - getColorDistance(b.color, selectedColor))
            .map((item) => ({ img: item.img, distance: getColorDistance(item.color, selectedColor) }))
        : images.map((img) => ({ img, distance: 0 }));

    const topColors = Array.from(new Set(colorData.map((item) => item.color))).slice(0, 32);

    return (
        <div className="stills-container">
            <HeaderProjects />

            <div className="container-text-stills">
                <img className="container-text-stills-image" src="/img/stills-gallery-text.png" alt="" />
            </div>

            <div className="color-picker" style={{ width: '100%' }}>
                {topColors.map((color, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{
                            backgroundColor: `rgb(${color.join(',')})`,
                            width: `${100 / topColors.length}%`,
                            height: '50px'
                        }}
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>

            <div className="image-collage">
                {sortedImages.map((item, index) => {
                    const size = selectedColor ? Math.max(100, 500 - item.distance) : 150; // Adjust size scaling here
                    return (
                        <img
                            key={index}
                            src={item.img}
                            alt={`still ${index + 1}`}
                            className="still-image"
                            style={{
                                width: size + 'px',
                                height: 'auto',
                                margin: '7.5px'
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Stills;