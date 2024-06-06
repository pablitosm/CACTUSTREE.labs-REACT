import React from 'react';
import HeaderProjects from '../components/HeaderProjects';

const Intro = () => {

    return (
        <div className='container-all-intro'>
            <HeaderProjects />
            <div className="textContainerProyecto1">

                <div className="container-header-intro">
                    <div className="text-container-intro-text-left">
                        <img src="/img/tebay-text.png" alt="" />
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
                                src="https://player.vimeo.com/video/903441649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
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
                                        <p className="textTableIntro ">&#215;</p>
                                        <p className="textTableIntro ">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                        <p className="textTableIntro">NURIA PEREZ</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">DOP</p>
                                        <p className="textTableIntro ">&#215;</p>
                                        <p className="textTableIntro ">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                        <p className="textTableIntro">NURIA PEREZ</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">SCREENPLAY</p>
                                        <p className="textTableIntro ">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">PRODUCTION AND EDITING</p>
                                        <p className="textTableIntro">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">CAMERA OPERATOR</p>
                                        <p className="textTableIntro">&#215;</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">ARTURO MARTIN</p>
                                        <p className="textTableIntro">ALEXANDRO GRACIA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: 20, paddingRight: 20 }}>
                                        <p className="textTableIntro negritaIntro">CASTING</p>
                                    </td>
                                    <td className="textoMid" style={{ textAlign: 'left' }}>
                                        <p className="textTableIntro">LUCIA ROVIRA</p>
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