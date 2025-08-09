import React, { useState, useEffect } from 'react';

export default function Gallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const getThumb = (item) =>
    typeof item === 'string' ? item : (item.thumb || item.src || item.full);
  const getThumbSrcSet = (item) =>
    typeof item === 'object' ? item.thumbSrcSet : undefined;
  const getThumbSizes = (item) =>
    typeof item === 'object' ? item.sizes : undefined;
  const getFull = (item) =>
    typeof item === 'string' ? item : (item.full || item.src || item.thumb);
  const getAlt = (item, i) =>
    typeof item === 'object' && item?.alt ? item.alt : `image ${i + 1}`;

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

  // Preload adjacent images in lightbox for faster nav
  useEffect(() => {
    if (!isOpen || !images?.length) return;
    const preloadIndexes = [
      (current + 1) % images.length,
      (current - 1 + images.length) % images.length,
    ];
    preloadIndexes.forEach((idx) => {
      const src = getFull(images[idx]);
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [isOpen, current, images]);

  const currentItem = images[current];
  const fullSrc = isOpen ? getFull(currentItem) : null;

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((item, i) => (
          <div className="gallery-tile" key={i}>
            <img
              src={getThumb(item)}
              srcSet={getThumbSrcSet(item)}
              sizes={getThumbSizes(item)}
              alt={getAlt(item, i)}
              onClick={() => open(i)}
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
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
          <img src={fullSrc} alt={getAlt(currentItem, current)} />
          <button className="prev" onClick={prev}>&#10094;</button>
          <button className="next" onClick={next}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
