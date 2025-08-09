import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Follow & Contact</h2>
        <p>Find me on:</p>
        <ul className="socials">
          <li>
            <a className="social-link" href="https://www.instagram.com/_valdemar_ost_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a className="social-link" href="https://www.vogue.com/photovogue/photographers/404444" target="_blank" rel="noopener noreferrer" aria-label="PhotoVogue">
              <i className="fas fa-camera" aria-hidden="true"></i>
              <span>PhotoVogue</span>
            </a>
          </li>
          <li>
            <a className="social-link" href="mailto:sukhovspace@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>sukhovspace@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
