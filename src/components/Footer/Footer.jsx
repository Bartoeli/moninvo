import React from 'react';
import './footer.css';
import image from '../../Images/Logo/png/moninvo_mark_WHT.png';

export const Footer = () => {
  return (
    <>
      <div id="Contacts" className="footer">
        <div className="footer_logo">
          <img className="logoImg" src={image} alt="logo Moninvo" />
        </div>
        <div className="contact">
          <h3>Kontakty</h3>
          <div className="footerTop">


            <div className="address">
              <p className="contacts_label">Adresa: </p>
              Rohanské Nábřeží 23 <br /> 180 00 Praha
            </div>
            <div className="webEmailPhone">
              <span className="contact_wep">
                <p className="contacts_label">Telefonní číslo:</p> +420 123 456
                789
              </span>
              <span className="contact_wep">
                <p className="contacts_label">Email:</p>info@moninvo.cz
              </span>


              <a className="contact_wep" href="https.moninvo.cz">
                <p className="contacts_label">Web:</p>www.moninvo.cz
              </a>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerBottomLeft">
              <ul className="socialMedia">
                <li className="some">
                  <a href="https://www.facebook.com/moninvo/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <p className="copyright">© Moninvo, 2020</p>
            </div>
            <div className="GDT_GDPR">
              <ul>
                <li className="GDT_GDPR_li">
                  <div className="gdt">Obchodní podmínky</div>
                </li>
                <li>
                  <div className="gdpr">Zpracování osobních údajů</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
