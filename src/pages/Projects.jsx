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
    slug: 'urban',
    title: 'Urban Stories',
    description: 'Life and motion in the city.',
    cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
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
