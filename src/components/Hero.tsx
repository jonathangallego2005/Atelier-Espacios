import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_IMAGE, IMAGE_FALLBACK } from '../data/images';

export interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  label?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = HERO_IMAGE,
  title = 'Espacios que\nInspiran',
  subtitle = 'Diseño arquitectónico de excelencia. Proyectos que transforman.',
  label = 'Diseño Arquitectónico',
}) => {
  const [bgSrc, setBgSrc] = useState(backgroundImage);
  const titleLines = title.split('\n');

  return (
    <section className="relative w-full min-h-[100svh] flex items-end lg:items-center overflow-hidden mt-16 lg:mt-20">
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => {
          if (bgSrc !== IMAGE_FALLBACK) setBgSrc(IMAGE_FALLBACK);
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-32 lg:pb-40 pt-36 lg:pt-48">
        <div className="atelier-hero-content animate-fade-in">
          <span className="atelier-eyebrow atelier-eyebrow--hero">{label}</span>

          <h1 className="atelier-hero-title">
            {titleLines.map((line, index) => (
              <React.Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h1>

          <p className="atelier-hero-lead">{subtitle}</p>
        </div>
      </div>

      <a
        href="#projects"
        className="atelier-hero-scroll-link absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        aria-label="Ir a proyectos"
      >
        <span className="atelier-hero-scroll">Explorar</span>
        <ChevronDown className="w-5 h-5 text-[#C99C70]" strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
