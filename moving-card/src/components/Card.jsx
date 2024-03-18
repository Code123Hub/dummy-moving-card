

import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Card.css';

const Card = ({ title, content, image }) => {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      glare: true,
      maxGlare: 0.5,
    // reset: false
    // scale: 1.2
    });
  }, []);

  return (
    <div className="card" ref={tiltRef}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;