import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const IntroVideo = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [hideImmediately, setHideImmediately] = useState(false);

  useEffect(() => {
    const introShown = Cookies.get('introShown');
    if (!introShown) {
      setShowIntro(true);
      setTimeout(() => {
        setShowIntro(false);
        Cookies.set('introShown', 'true', { expires: 1 });
      }, 5000);
    } else {
      setHideImmediately(true);
    }
  }, []);

  return (
    <div id="preloader" className={`${!showIntro ? 'hide' : ''} ${hideImmediately ? 'no-animation' : ''}`}>
      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
        <source src="./media/ANIMACION.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroVideo;