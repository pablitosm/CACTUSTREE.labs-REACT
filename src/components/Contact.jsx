import React from 'react';

function Contact() {
  return (
    <div className="contact sextaImagen" id="contact">
      <table className="tableIndex responsive-table">
        <tbody>
          <tr>
            <td className="leftContent">
              <div className="centered-text2">
                <h2 className="aboutMe">about me</h2>
                <p>My name is <b>Arturo Martín</b>, I am a <b>21-year-old</b> guy who is passionate
                  about the <b>audiovisual world</b>. Since I was a child, I've had a camera in my hands.
                  I graduated from the <b>most important audiovisual production school in Aragon</b>.
                  After graduating, I went to <b>France to work</b> for a while at a production company.
                </p>
                <p>Now that I'm back home, I'm looking for a way to <b>start my own business</b>,
                  and I'm actively seeking <b>new clients</b> who want to <b>enhance their businesses</b> through
                  images and videos.
                </p>
                <p>That's why I've created <b>CACTUSTREE.labs&#8482;</b>. For me, audiovisual production
                  is another way to express myself, and I strive to ensure
                  that all my clients are satisfied with the work I do.
                </p><br />
                <p>Phone Number: <b><a className="link-footer-index-description" href="tel:+34692948126">+34 692 94 81 26</a></b></p>
                <p>Email: <b><a className="link-footer-index-description" href="mailto:info@cactustreelabs.com">info@cactustreelabs.com</a></b></p>
              </div>
            </td>
            <td className="rightContent">
              <h2>contact</h2>
              <form id="miFormulario" method="POST">
                <input type="hidden" name="access_key" value="0761ef7d-af07-4a95-aff0-4ba8b5473cc7" />
                <input type="hidden" name="subject" value="Formulario de contacto" />
                <input type="hidden" name="from_name" value="cactustree.labs" />
                <input type="text" name="nombre" id="nombre" placeholder="name" autoComplete="given-name" required />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="email" autoComplete="email" required />
                <label htmlFor="mensaje"></label>
                <textarea name="mensaje" id="mensaje" placeholder="message" required></textarea>
                <input type="submit" value="Submit" />
                <p id="mensajeExito" style={{ display: 'none' }}>Form successfully submitted!</p>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
