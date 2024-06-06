import React from 'react';
import HeaderProjects from '../components/HeaderProjects';

const Intro = () => {

  return (
    <div className='container-all-intro'>
      <HeaderProjects />
      <div className="textContainerProyecto1">

        <div className="container-header-intro">
          <div className="text-container-intro-text-left">
            <img src="/img/intro-text.png" alt="" />
          </div>

          <div className="text-container-intro-text-right">
            <p className="pieFoto">
              (INTRO is the story of a teenage girl who is going through a bad period in her life, she has just had a breakup and it is not being easy for her to get over it. In the video you can see how she tries to be well and enjoy her life going out partying, but in her head she cant stop thinking about the last conversation they had and how it ended).
            </p>
            <p className="textoGrande">intro is the making of a video clip about the problems facing teenagers in the 21st century.</p>
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
          <br /><br />

          <div className="grid-container">
            <div className="foto3">
              <img src="/img_webp/intro/1.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/2.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/3.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/4.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/5.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/6.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/7.webp" alt="" />
            </div>
            <div className="foto3">
              <img src="/img_webp/intro/8.webp" alt="" />
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