import React from 'react';
import './footer.css';
import image from '../../Images/Logo/png/moninvo_logo_BLU.png';

export const Footer = () => {
  return (
    <>
      <div id="Contacts" className="footer">
        <div className="flogo">
          <img className="logoObr" src={image} alt="logo Moninvo" />
        </div>
        <div className="kontakt">
          <p className="adresa">
            Rohanské Nábřeží 23 <br /> 180 00 Praha
          </p>
          {/* @TODO <ul className="socky">
            <li className="socka">
              <a href="https://www.facebook.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#242F72"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#242F72"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>
            </li>
          </ul> */}
          <p>© Moninvo, 2020</p>
        </div>
        <div className="odkazy">
          <ul>
            <li className="liOdkazy">
              <div className="podminky">Obchodní podmínky</div>
            </li>
            <li>
              <div className="gdpr">Zpracování osobních údajů</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
