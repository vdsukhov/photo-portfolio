import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';

const projectData = {
  vogue: {
    title: 'Vogue',
    images: [
      {
        thumb: 'https://images.vogue.it/Photovogue/277be7a0-1938-11f0-8b68-e727f1c30dc4_gallery.jpg?auto=format&fit=crop&w=600&q=70',
        full: 'https://images.vogue.it/Photovogue/277be7a0-1938-11f0-8b68-e727f1c30dc4_gallery.jpg?auto=format&w=1800&q=85'
      },
      {
        thumb: 'https://images.vogue.it/Photovogue/d70af2c0-1937-11f0-9d51-e57de264298b_gallery.jpg?auto=format&fit=crop&w=600&q=70',
        full: 'https://images.vogue.it/Photovogue/d70af2c0-1937-11f0-9d51-e57de264298b_gallery.jpg?auto=format&w=1800&q=85'
      },
      {
        thumb: 'https://images.vogue.it/Photovogue/3ae0fa00-0e3a-11f0-b9f0-0b888f34ccb3_gallery.jpg?auto=format&fit=crop&w=600&q=70',
        full: 'https://images.vogue.it/Photovogue/3ae0fa00-0e3a-11f0-b9f0-0b888f34ccb3_gallery.jpg?auto=format&w=1800&q=85'
      }
    ]
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData[slug];

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
