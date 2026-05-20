import React from 'react';

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop',
  title = 'Espacios que Inspiran',
  subtitle = 'Diseño arquitectónico de excelencia',
}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-atelier-cta via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-5xl lg:text-7xl font-light text-atelier-container mb-6 tracking-tight leading-tight">
          {title}
        </h1>

        {/* Divider Line */}
        <div className="w-16 h-px bg-atelier-accent mx-auto mb-6" />

        <p className="text-lg lg:text-xl text-atelier-container font-light tracking-wide max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-atelier-container text-xs tracking-widest">EXPLORAR</span>
          <svg className="w-5 h-5 text-atelier-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
