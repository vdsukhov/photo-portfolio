import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'nature',
    title: 'Nature Escapes',
    description: 'Exploring the serenity of the wild.',
    cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
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
