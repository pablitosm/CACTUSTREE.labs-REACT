import React from 'react';

function Contact() {
  return (
    <div className="contact sextaImagen" id="contact">
      <table className="tableIndex responsive-table">
        <tbody>
          <tr>
          <td className="leftContent">
            <div className="centered-text2">
              <h2 className="aboutMe">ABOUT ME</h2>
              <p>MY NAME IS <b>ARTURO MARTÍN</b>, I AM A <b>21-YEAR-OLD</b> GUY WHO IS PASSIONATE ABOUT THE <b>AUDIOVISUAL WORLD</b>. SINCE I WAS A CHILD, I&apos;VE ALWAYS HAD A CAMERA IN MY HANDS. I GRADUATED FROM THE <b>MOST IMPORTANT AUDIOVISUAL PRODUCTION SCHOOL IN ARAGON</b>. AFTER GRADUATING, I WENT TO <b>FRANCE TO WORK</b> FOR A WHILE AT A PRODUCTION COMPANY.</p>
              <p>NOW THAT I&apos;M BACK HOME, I&apos;M LOOKING FOR A WAY TO <b>START MY OWN BUSINESS</b>, AND I AM ACTIVELY SEEKING <b>NEW CLIENTS</b> WHO WANT TO <b>ENHANCE THEIR BUSINESSES</b> THROUGH IMAGES AND VIDEOS.</p>
              <p>THAT&apos;S WHY I&apos;VE CREATED <b>CACTUSTREE.LABS&#8482;</b>. FOR ME, AUDIOVISUAL PRODUCTION IS ANOTHER WAY TO EXPRESS MYSELF, AND I STRIVE TO ENSURE THAT ALL MY CLIENTS ARE SATISFIED WITH THE WORK I DO.</p><br />
              <p>PHONE NUMBER: <b><a className="link-footer-index-description" href="tel:+34692948126">+34 692 94 81 26</a></b></p>
              <p>EMAIL: <b><a className="link-footer-index-description" href="mailto:info@cactustreelabs.com">INFO@CACTUSTREELABS.COM</a></b></p>
            </div>
          </td>
            <td className="rightContent">
              <h2>CONTACT</h2>
              <form id="miFormulario" method="POST" action="https://api.web3forms.com/submit">
                <input type="hidden" name="access_key" value="0761ef7d-af07-4a95-aff0-4ba8b5473cc7" />
                <input type="hidden" name="subject" value="Formulario de contacto" />
                <input type="hidden" name="from_name" value="cactustree.labs" />
                <input type="text" name="nombre" id="nombre" placeholder="NAME" autoComplete="given-name" required />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="EMAIL" autoComplete="email" required />
                <label htmlFor="mensaje"></label>
                <textarea name="mensaje" id="mensaje" placeholder="MESSAGE" required></textarea>
                <input type="submit" value="SUBMIT" />
                <p id="mensajeExito" style={{ display: 'none' }}>FORM SUCCESFULLY SUBMITTED!</p>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;