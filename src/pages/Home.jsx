import React from 'react';
import Gallery from '../components/Gallery.jsx';
import selectedWorks from '../data/selectedWorks.js';

export default function Home() {
  return (
    <>
      <section className="bio">
        <img
          src="https://avatars.githubusercontent.com/u/45002914?v=4?auto=format&fit=crop&w=200&q=80"
          alt="avatar"
          className="avatar"
        />
        <div>
          <h2>Hi, I'm Vladimir Sukhov</h2>
          <p>Based in Saint Louis. </p>
          <p>It’s often the quietest things—an abandoned chair, a gentle shadow, a whisper of wind through an open window—that say the most.</p>
          <div className="genres">
            <span className="badge">Nature</span>
            <span className="badge">Street</span>
            <span className="badge">Minimalism</span>
          </div>
        </div>
      </section>  
      <section className="selected">
        <h2>Selected Works</h2>
        <Gallery images={selectedWorks} />
      </section>
    </>
  );
}
