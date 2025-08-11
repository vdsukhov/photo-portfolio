import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import { getProject } from '../data/projects.js';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section>
      <h2 className="gallery-title">{project.title}</h2>
      <Gallery images={project.images} />
    </section>
  );
}
