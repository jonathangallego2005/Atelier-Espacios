import React, { useState } from 'react';
import { IMAGE_FALLBACK } from '../data/images';

export interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = 'atelier-project-card__media',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      data-cover
      className={className}
      onError={() => {
        if (currentSrc !== IMAGE_FALLBACK) {
          setCurrentSrc(IMAGE_FALLBACK);
        }
      }}
    />
  );
};

export default ProjectImage;
