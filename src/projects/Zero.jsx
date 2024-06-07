import React, { useEffect, useState } from 'react';
import HeaderProjects from '../components/HeaderProjects';

const Intro = () => {

  const [imageSrc, setImageSrc] = useState('/img/artgallery-text.png');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClassChange = () => {
      if (document.body.classList.contains('dark')) {
        setImageSrc('/img/zero-text-white.png');
      } else {
        setImageSrc('/img/zero-text.png');
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
        <div className="container-header-zero">
          <div className="text-container-zero-text-left">
            <img src={imageSrc} alt="" />
          </div>
          <div className="text-container-zero-text-right">
            <p className="pieFoto">(ZERØ tells the story of a boy exhausted by the monotony
              of life, feeling that nothing has any meaning anymore. In a desperate act,
              he decides to dive into a bathtub, uncertain whether he will emerge or simply
              get lost in the depths of his own existence).
            </p>
            <p className="textoGrande">ZERØ is a personal project that I was able to carry out
              thanks to a <a href="https://www.verkami.com/projects/35958-zero-a-film-only-for-dreamers"
                target='_blank'
                style={{
                  textDecoration: 'underline',
                  color: '#0e1111'
                }}>
                crowdfunding
              </a> and the collaboration of friends and colleagues.</p>
          </div>
        </div>

        <div className="foto2 image1Proyecto1">
          <div className="content-top-intro">
            <div className="videoIframe" style={{ padding: '42.37% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/927877026?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="intro"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <div className="content-tableZero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <table className="tableZero responsive-text">
                <tbody>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">DIRECTOR/PRODUCER/STARRING ACTOR/EDITOR</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left', height: '50px', width: '150px' }}>
                      <p className="textTableIntro">ARTURO MARTIN</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">ACTING DIRECTION/HAIRSTYLING/ANALOG STILL PHOTOGRAPHY</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">LUCIA ROVIRA</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">MAKEUP/MAKEUP FX</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">ADRIANA MARTIN</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">SOUND TECHNICIAN/2 LIGHTING TECHNICIAN</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">RAFAEL TOLEDANO</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">CAMERA OPERATOR/DIRECTOR OF PHOTOGRAPHY/ACTOR</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">ALEXANDRO GRACIA</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">DIRECTOR OF PHOTOGRAPHY/CAMERA OPERATOR/ACTOR</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">DIEGO MONTALVO</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">LIGHTING TECHNICIAN/2 SOUND TECHNICIAN/CAMERA OPERATOR</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">DANIEL GASCON</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">ART DIRECTION/DIGITAL STILL PHOTOGRAPHY</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">NURIA PEREZ</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">ART DIRECTION</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">ARIADNA DIEZ</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">MUSIC/SOUNDTRACK</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">VICTOR MUÑOZ</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="textoMidNegrita" style={{ textAlign: 'right', verticalAlign: 'top', paddingTop: '15px', paddingRight: '15px' }}>
                      <p className="textTableIntro negritaIntro">VOICE-OVER</p>
                    </td>
                    <td className="textoMid" style={{ textAlign: 'left' }}>
                      <p className="textTableIntro">CHEMA GAYARRE</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid-container">
            <div className="foto3">
              <img src="/img_webp/zero/1.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/2.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/3.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/4.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/5.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/6.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/7.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/zero/8.webp" alt="" />
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