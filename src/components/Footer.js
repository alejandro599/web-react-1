import React from "react";
import "../style/Footer.scss";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subcription">
          <p className="footer-subscription-text">¿Donde estamos?</p>
          <div className="input-area">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.891745357941!2d-58.478445684174375!3d-34.632175866512746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9904c9af6c3%3A0xe20332e2a7509aee!2sEcl%C3%ADptico!5e0!3m2!1ses-419!2sar!4v1608265466583!5m2!1ses-419!2sar"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="map"
            />
          </div>
        </section>
        <div className="footer-links">
          <h2>Contactanos!!!</h2>
          <ul>
            <li className="frate">/Frate Quirquinchos</li>
            <li>
              <a
                href="https://m.me/FrateQuirquinchos"
                className="fab fa-facebook-f fb"
              ></a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=005491132857959"
                className="fab fa-whatsapp wsp"
                tittle="wsp"
              ></a>
            </li>
            <li className="mari">María Luz (Coordinadora General)</li>
          </ul>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              
            </div>
            <small className="website-rights">
              Copyright © 2020 Quirquinchos de Corazón.
            </small>
            {/** 
            <div className="social-icons">
              <Link
                to="/"
                className="social-icon-link facebook"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="/"
                className="social-icon-link instagram"
                target="_blank"
                arial-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="/"
                className="social-icon-link linkedin"
                target="_blank"
                arial-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link
                href="https://www.facebook.com/"
                to=""
                className="social-icon-link twitter"
                target="_blank"
                arial-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              
            </div>
            */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
