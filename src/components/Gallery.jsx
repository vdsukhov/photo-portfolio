import React, { useState, useEffect } from 'react';

export default function Gallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const open = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  // Keyboard navigation when lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`image ${i + 1}`} onClick={() => open(i)} />
        ))}
      </div>
      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer lightbox"
          tabIndex={-1}
        >
          <button className="close" onClick={() => setIsOpen(false)}>&times;</button>
          <img src={images[current]} alt="expanded" />
          <button className="prev" onClick={prev}>&#10094;</button>
          <button className="next" onClick={next}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
