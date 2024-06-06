import React from 'react';
import PrimeraImagen from '/img_webp/zero/1.webp';
import SegundaImagen from '/img_webp/zero/2.webp';
import TerceraImagen from '/img_webp/zero/3.webp';
import CuartaImagen from '/img_webp/zero/4.webp';
import QuintaImagen from '/img_webp/zero/5.webp';
import SextaImagen from '/img_webp/zero/6.webp';
import SeptimaImagen from '/img_webp/zero/7.webp';
import OctavaImagen from '/img_webp/zero/8.webp';
import Intro1 from '/img_webp/intro/1.webp';
import Intro2 from '/img_webp/intro/2.webp';
import Intro3 from '/img_webp/intro/3.webp';
import Intro4 from '/img_webp/intro/4.webp';
import Intro5 from '/img_webp/intro/5.webp';
import Intro6 from '/img_webp/intro/6.webp';
import Intro7 from '/img_webp/intro/7.webp';
import Intro8 from '/img_webp/intro/8.webp';
import Still25 from '/img/stills_preview/25.jpg';
import Still9 from '/img/stills_preview/9.jpg';
import Still1 from '/img/stills_preview/1.jpg';
import Still2 from '/img/stills_preview/2.jpg';
import Still3 from '/img/stills_preview/3.jpg';
import Still4 from '/img/stills_preview/4.jpg';
import Still5 from '/img/stills_preview/5.jpg';
import Still6 from '/img/stills_preview/6.jpg';
import Still7 from '/img/stills_preview/7.jpg';
import Still8 from '/img/stills_preview/8.jpg';
import Still10 from '/img/stills_preview/10.jpg';
import Still11 from '/img/stills_preview/11.jpg';
import Still12 from '/img/stills_preview/12.jpg';
import Still13 from '/img/stills_preview/13.jpg';
import Still14 from '/img/stills_preview/14.jpg';
import Still15 from '/img/stills_preview/15.jpg';
import Still16 from '/img/stills_preview/16.jpg';
import Still17 from '/img/stills_preview/17.jpg';
import Still18 from '/img/stills_preview/18.jpg';
import Still19 from '/img/stills_preview/19.jpg';
import Still20 from '/img/stills_preview/20.jpg';
import Still21 from '/img/stills_preview/21.jpg';
import Still22 from '/img/stills_preview/22.jpg';
import Still24 from '/img/stills_preview/24.jpg';

import HeaderProjects from '../components/HeaderProjects';

const images = [
    PrimeraImagen, SegundaImagen, TerceraImagen, CuartaImagen, QuintaImagen, SextaImagen, SeptimaImagen, OctavaImagen,
    Intro1, Intro2, Intro3, Intro4, Intro5, Intro6, Intro7, Intro8,
    Still25, Still9, Still1, Still2, Still3, Still4, Still5, Still6,
    Still7, Still8, Still10, Still11, Still12, Still13, Still14, Still15,
    Still16, Still17, Still18, Still19, Still20, Still21, Still22, Still24
];

function ZeroContent() {
    return (
        <>
            <HeaderProjects />
            <div className="gallery-container-top">
                <HeaderProjects />
                <div className="container-header-gallery">

                    <div className="text-container-gallery-text-left">
                        {/* <img className="image-gallery-art" src="/img/art-text.png" alt="" />
                        <img className="image-gallery-gallery" src="/img/gallery-text.png" alt="" /> */}
                        <img className="image-artgallery-gallery" src="/img/artgallery-text.png" alt="" />
                    </div>

                    <div className="text-container-gallery-text-right">
                        <p className="pieFoto">EACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENT, PROVIDING YOU WITH AN EXCLUSIVE GLIMPSE BEHIND THE SCENES. IT OFFERS A PREVIEW OF MY WORK, SHOWCASING THE DEDICATION AND CRAFTSMANSHIP THAT I POUR INTO EVERY PROJECT.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gallery-container-bottom">
                <div className="container-gallery-image1-top">
                    <img src="/img/stills_zero_webp/1.webp" alt="" />
                </div>
                <div className="container-gallery-image1-bottom">
                    <p>EACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENTEACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENTEACH STILL CAPTURES A UNIQUE AND MEANINGFUL MOMENT</p>
                </div>
                
            </div>

        </>
    );
}

export default ZeroContent;
