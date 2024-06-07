import React, { useEffect, useState } from 'react';
import HeaderProjects from '../components/HeaderProjects';

const Intro = () => {
    const [imageSrc, setImageSrc] = useState('/img/tebay-text.png');

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleClassChange = () => {
            if (document.body.classList.contains('dark')) {
                setImageSrc('/img/tebay-text-white.png');
            } else {
                setImageSrc('/img/tebay-text.png');
            }
        };

        handleClassChange();

        const observer = new MutationObserver(handleClassChange);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='container-all-intro'>
            <HeaderProjects />
            <div className="textContainerProyecto1">
                <div className="container-header-intro">
                    <div className="text-container-intro-text-left">
                        <img src={imageSrc} alt="" />
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
                <div className="foto2 image1Proyecto1">
                    <div className="content-top-intro">
                        <div className="videoIframe" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/903446448?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="intro"
                            ></iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                        <table className="tableIntro">
                            <tbody>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">DIRECTOR</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO POLO ENA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">CAMERA</p>
                                        <p className="textTableIntro ">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO POLO ENA</p>
                                        <p className="textTableIntro">JAY CLAUS</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">POST PRODUCTOR</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">CONCEPT</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO POLO ENA</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid-container">
                        <div className="foto3">
                            <img src="/img_webp/ski/ski1.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski2.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski3.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski4.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski5.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski6.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski7.webp" alt="" />
                        </div>
                        <div className="foto3">
                            <img src="/img_webp/ski/ski8.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-cursor"></div>
            <div className="outer-cursor"></div>
        </div>
    );
};

export default Intro;