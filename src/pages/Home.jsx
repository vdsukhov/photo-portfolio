import React from 'react';

export default function Home() {
  return (
    <>
      <section className="bio">
        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80"
          alt="avatar"
          className="avatar"
        />
        <div>
          <h2>Hi, I'm John Doe</h2>
          <p>Based in New York. I enjoy capturing moments in Nature and Urban life.</p>
          <div className="genres">
            <span className="badge">Portrait</span>
            <span className="badge">Street</span>
            <span className="badge">Nature</span>
          </div>
        </div>
      </section>
      <section className="selected">
        <h2>Selected Works</h2>
        <div className="grid">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
            alt="work1"
          />
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
            alt="work2"
          />
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
            alt="work3"
          />
          <img
            src="https://images.unsplash.com/photo-1501769214405-0c3b74f4d7ba?auto=format&fit=crop&w=400&q=80"
            alt="work4"
          />
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80"
            alt="work5"
          />
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
            alt="work6"
          />
        </div>
      </section>
    </>
  );
}
