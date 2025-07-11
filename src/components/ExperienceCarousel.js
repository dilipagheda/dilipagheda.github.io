import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { EXPERIENCE } from '../data/content/experience';
import '../sass/experience-carousel.scss';

const MOBILE_MAX_WIDTH = 900;

const ExperienceCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const experiences = EXPERIENCE.items.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % experiences.length);
        setFade(true);
      }, 400); // fade out duration
    }, 3000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  // Only render on mobile/tablet
  if (window.innerWidth > MOBILE_MAX_WIDTH) return null;

  const exp = experiences[index];

  return (
    <div className={`experience-carousel-panel${fade ? ' fade-in' : ' fade-out'}`}> 
      <div className="carousel-content">
        <strong>{exp.jobTitle}</strong> @ {exp.companyName} <br/>
        <span className="exp-period">{exp.period}</span>
      </div>
    </div>
  );
};

export default ExperienceCarousel; 