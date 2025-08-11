import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'vogue',
    title: 'Vogue',
    description: 'My works from PhotoVogue.',
    cover: 'https://images.vogue.it/Photovogue/d70af2c0-1937-11f0-9d51-e57de264298b_gallery.jpg?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'solitude',
    title: 'Solitude',
    description: '',
    cover: 'https://res.cloudinary.com/dfqtqxygj/image/upload/v1754763178/IMG_3214_2_kdun2e.jpg?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="project-card"
            style={{ backgroundImage: `url('${p.cover}')` }}
          >
            <div className="overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
