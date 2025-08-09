import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Find me on:</p>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a>
        <a href="mailto:me@example.com" target="_blank" rel="noopener"><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
}
