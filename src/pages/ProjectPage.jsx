import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';

const projectData = {
  nature: {
    title: 'Nature Escapes',
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501769214405-0c3b74f4d7ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  urban: {
    title: 'Urban Stories',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80'
    ]
  }
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
