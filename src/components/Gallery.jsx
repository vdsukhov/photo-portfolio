import React, { useState } from 'react';

export default function Gallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const open = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`image ${i + 1}`} onClick={() => open(i)} />
        ))}
      </div>
      {isOpen && (
        <div className="lightbox">
          <button className="close" onClick={() => setIsOpen(false)}>&times;</button>
          <img src={images[current]} alt="expanded" />
          <button className="prev" onClick={prev}>&#10094;</button>
          <button className="next" onClick={next}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
