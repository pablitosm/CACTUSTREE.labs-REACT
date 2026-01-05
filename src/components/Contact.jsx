import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormStatus('FORM SUCCESSFULLY SUBMITTED!');
        form.reset();
      } else {
        setFormStatus('ERROR SUBMITTING FORM. PLEASE TRY AGAIN.');
      }
    } catch (error) {
      setFormStatus('ERROR SUBMITTING FORM. PLEASE TRY AGAIN.');
    }
  };

  return (
    <div className="contact sextaImagen" id="contact">
      <hr style={{ marginLeft: '15px', marginRight: '15px' }} />
      <div className="bottom-content-contact" style={{ padding: '0 15px 15px 15px', width: '100%' }}>
        <div className="centered-text2">
          <h2 className="aboutMe">ABOUT ME</h2>
          <p>MY NAME IS <b>ARTURO MARTÍN</b>, I AM A <b>23-YEAR-OLD</b> GUY WHO IS PASSIONATE ABOUT THE <b>AUDIOVISUAL WORLD</b>. SINCE I WAS A CHILD, I&apos;VE ALWAYS HAD A CAMERA IN MY HANDS. I GRADUATED FROM THE <b>MOST IMPORTANT AUDIOVISUAL PRODUCTION SCHOOL IN ARAGON</b>. AFTER GRADUATING, I WENT TO <b>FRANCE TO WORK</b> FOR A WHILE AT A PRODUCTION COMPANY.</p>
          <p>NOW THAT I&apos;M BACK HOME, I&apos;M LOOKING FOR A WAY TO <b>START MY OWN BUSINESS</b>, AND I AM ACTIVELY SEEKING <b>NEW CLIENTS</b> WHO WANT TO <b>ENHANCE THEIR BUSINESSES</b> THROUGH IMAGES AND VIDEOS.</p>
          <p>THAT&apos;S WHY I&apos;VE CREATED <b>CACTUSTREE.LABS&#8482;</b>. FOR ME, AUDIOVISUAL PRODUCTION IS ANOTHER WAY TO EXPRESS MYSELF, AND I STRIVE TO ENSURE THAT ALL MY CLIENTS ARE SATISFIED WITH THE WORK I DO.</p><br />
          <p>PHONE NUMBER: <b><a className="link-footer-index-description" href="tel:+34692948126">+34 692 94 81 26</a></b></p>
          <p style={{ margin: 0 }}>EMAIL: <b><a className="link-footer-index-description" href="mailto:info@cactustreelabs.es">INFO@CACTUSTREELABS.ES</a></b></p>
        </div>
      </div>
      <div className="top-content-contact rightContent" style={{ padding: '0 15px 0 15px', width: '100%' }}>
        <h2>CONTACT</h2>
        <form id="miFormulario" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="Formulario de contacto" />
          <input type="hidden" name="from_name" value="cactustree.labs" />
          <input type="text" name="nombre" id="nombre" placeholder="NAME" autoComplete="given-name" required />
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="EMAIL" autoComplete="email" required />
          <label htmlFor="mensaje"></label>
          <textarea name="mensaje" id="mensaje" placeholder="MESSAGE" required></textarea>
          <input className='submit-form' type="submit" value="SUBMIT" />
        </form>
        {formStatus && <p id="mensajeExito" style={{ padding: 0, margin: 0 }}>{formStatus}</p>}
      </div>
    </div>
  );
}

export default Contact;